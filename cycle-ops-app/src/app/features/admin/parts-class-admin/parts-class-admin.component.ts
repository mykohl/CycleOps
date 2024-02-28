import { Component, ViewChild, OnDestroy, Type } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { 
  CdkDragDrop,
  CdkDragStart,
  moveItemInArray,
  transferArrayItem,
  CdkDragHandle
} from '@angular/cdk/drag-drop';
import { MatTable } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PartsAdminReqService } from '../../../shared/services/api-request-services/parts-admin-request-service/parts-admin-request.service';
import { 
  PartClassDto, 
  PartClassMembershipDto, 
  PartTypeDto 
} from '../../../../../../data/models/model.dto';
import { DialogService } from '../../../shared/services/dialog-service/dialog.service';
import { PartClassDialogComponent } from '../../../shared/components/dialogs/part-class-dialog/part-class-dialog.component';

@Component({
  selector: 'admin-parts',
  templateUrl: './parts-class-admin.component.html',
  styleUrl: './parts-class-admin.component.scss'
})
export class PartsClassAdminComponent implements OnDestroy {
  @ViewChild('partClassTable', { static: true }) partClassTable: MatTable<PartClassDto>;
  private subFetchPartClassData: Subscription;
  private subFetchPartTypeData: Subscription;
  private subDialog: Subscription;
  private subUpdatePartClass: Subscription;
  partClassDataSource: MatTableDataSource<PartClassDto> = new MatTableDataSource();
  partTypeDataSource: MatTableDataSource<PartTypeDto> = new MatTableDataSource();
  partClassTableColumns: string[] = ["order", "name", "actions"];
  partTypeTableColumns: string[] = ["order", "name", "description", "actions"];
  partClassDragDisabled: boolean = false;
  partTypeDragDisabled: boolean = false;
  selectedClass: PartClassDto | null = null;
  selectedTypes: (PartTypeDto | null)[] | null = null;
  editingClass: number | null = null;

  constructor(
    private dialogService: DialogService,
    private apiReqPartsAdminService: PartsAdminReqService,
    private snackBar: MatSnackBar) {
  }

  ngAfterViewInit() {
    this.subFetchPartClassData = this.fetchPartClassData().subscribe(partClassData => {
      this.partClassDataSource.data = partClassData;
    });
    this.subFetchPartTypeData = this.fetchPartTypeData().subscribe(partTypeData => {
      this.partTypeDataSource.data = partTypeData;
    });
  }

  ngOnDestroy(): void {
    this.subFetchPartClassData.unsubscribe();
    this.subFetchPartTypeData.unsubscribe();
    this.subUpdatePartClass.unsubscribe();
    this.subDialog.unsubscribe();
  }

  private fetchPartClassData(): Observable<PartClassDto[]> {
    return this.apiReqPartsAdminService.getPartClasses();
  }

  private fetchPartTypeData(): Observable<PartTypeDto[]> {
    return this.apiReqPartsAdminService.getPartTypes();
  }

  partTypeInClass(partType: PartTypeDto | null): boolean {
    if(partType && this.selectedClass) return partType.partClassRefs.includes(this.selectedClass.id);
    return false;
  }

  findPartClassIndex(id: number): number {
    return this.partClassDataSource.data.findIndex(c => c.id === id);
  }

  editPartClass(i?: number): void {
    const isNew = i === undefined;
    this.editingClass = i;
    this.partClassDragDisabled = true;
    this.subDialog = this.dialogService.openDialog(
      PartClassDialogComponent,
      {
        data: {
          type: isNew ? DialogService.DIALOG_TYPE_NEW : DialogService.DIALOG_TYPE_EDIT,
          data: isNew ? null : this.partClassDataSource.data[i]
        }
      }
    ).subscribe(dialogResult => {
      if(dialogResult.action === DialogService.DIALOG_ACTION_CLOSE) return;
      this.updatePartClass(dialogResult.data, i);
    });
  }

  private updatePartClass(partClassData: PartClassDto, i: number): void {
    const isNew = partClassData.id === null;
    this.subUpdatePartClass = this.apiReqPartsAdminService.updatePartClass(partClassData).subscribe(updateResult => {
      let snackText: string;
      if(isNew) {
        snackText = 'Added part class';
        this.partClassDataSource.data.push(updateResult);
      } else {
        snackText = 'Updated part class to';
        this.partClassDataSource.data[i] = updateResult;
      }
      this.partClassTable.renderRows();
      this.partClassDragDisabled = false;
      this.editingClass = null;
      this.snackBar.open(
        `${snackText} ${updateResult.name}`, 'Dismiss', { duration: 3600 }
      );
    });
  }

  deletePartClass(i: number) {

  }

  updatePartType() {

  }

  movePartClass(dropEvent: any): void {
    this.partClassDragDisabled = true;
    const drop = dropEvent as CdkDragDrop<PartClassDto[]>;
    const previousIndex = this.partClassDataSource.data.findIndex((d) => d === drop.item.data);
    moveItemInArray(this.partClassDataSource.data, previousIndex, drop.currentIndex);
    this.subUpdatePartClass = this.reorderPartClass(
      drop.item.data['id'], 
      drop.currentIndex + 1, 
      previousIndex + 1
    ).subscribe(() => {
      this.partClassTable.renderRows();
      this.partClassDragDisabled = false;
    });
  }

  toggleInClass(partType: PartTypeDto | null) {
    if(!partType || !this.selectedClass) return;
    if(partType.partClassRefs.includes(this.selectedClass.id)) {
      this.subUpdatePartClass = this.removePartClassMember(partType.id).subscribe(result => {
        if(result) {
          partType.partClassRefs = partType.partClassRefs.filter(t => t !== this.selectedClass.id);
        }
      });
    } else {
      this.subUpdatePartClass = this.addPartClassMember(partType.id).subscribe(result => {
        if(result) {
          partType.partClassRefs.push(this.selectedClass.id);
        }
      });
    }
  }

  private reorderPartClass(partClassId: number, order: number, previousOrder: number): Observable<any> {
    return this.apiReqPartsAdminService.reorderPartClass({
      partClassId: partClassId, order: order, previousOrder: previousOrder
    });
  }

  removePartClassMember(partTypeId: number): Observable<boolean> {
    if(!this.selectedClass) return null;
    return this.apiReqPartsAdminService.removePartClassMember({
      partTypeId: partTypeId,
      partClassId: this.selectedClass.id,
      isPrimary: false
    });
  }

  addPartClassMember(partTypeId: number): Observable<PartClassMembershipDto | null> {
    if(!this.selectedClass) return null;
    return this.apiReqPartsAdminService.addPartClassMember({
      partTypeId: partTypeId,
      partClassId: this.selectedClass.id,
      isPrimary: true
    });
  }
}
