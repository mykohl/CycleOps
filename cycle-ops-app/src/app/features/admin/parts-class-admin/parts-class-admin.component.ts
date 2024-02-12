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
import { dialogResult } from '../../../../../../data/models/model.app';

@Component({
  selector: 'admin-parts',
  templateUrl: './parts-class-admin.component.html',
  styleUrl: './parts-class-admin.component.scss'
})
export class PartsClassAdminComponent implements OnDestroy {
  @ViewChild('partClassTable', { static: true }) partClassTable: MatTable<PartClassDto>;
  private subFetchPartClassData: Subscription;
  private subFetchPartTypeData: Subscription;
  private subEditPartClass: Subscription;

  partClassDataSource: MatTableDataSource<PartClassDto> = new MatTableDataSource();
  partTypeDataSource: MatTableDataSource<PartTypeDto> = new MatTableDataSource();
  partClassTableColumns: string[] = ["order", "name", "edit"];
  partTypeTableColumns: string[] = ["order", "name", "description", "edit"];
  partClassDragDisabled: boolean = false;
  selectedClass: PartClassDto | null = null;
  selectedTypes: (PartTypeDto | null)[] | null = null;
  editingClass: number | null = null;

  constructor(
    private dialogService: DialogService,
    private apiReqClassificationService: PartsAdminReqService,
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
    this.subEditPartClass.unsubscribe();
  }

  fetchPartClassData(): Observable<PartClassDto[]> {
    return this.apiReqClassificationService.getPartClassifications();
  }

  fetchPartTypeData(): Observable<PartTypeDto[]> {
    return this.apiReqClassificationService.getPartTypes();
  }

  partTypeInClass(partType: PartTypeDto | null): boolean {
    if(partType && this.selectedClass) return partType.partClassRefs.includes(this.selectedClass.id);
    return false;
  }

  editPartClass(i: number) {
    this.editingClass = i;
    this.partClassDragDisabled = true;
    this.subEditPartClass = this.dialogService.openDialog (
      PartClassDialogComponent,
      "edit-item",
      this.partClassDataSource.data[i],
      300
    ).subscribe(result => {
      this.partClassDataSource.data[i] = result.data;
      this.partClassTable.renderRows();
      this.partClassDragDisabled = false;
      this.editingClass = null;
    });
  }

  movePartClass(dropEvent: any) {
    this.partClassDragDisabled = true;
    const drop = dropEvent as CdkDragDrop<PartClassDto[]>;
    const previousIndex = this.partClassDataSource.data.findIndex((d) => d === drop.item.data);
    moveItemInArray(this.partClassDataSource.data, previousIndex, drop.currentIndex);
    this.subEditPartClass = this.reorderPartClass(
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
      this.subEditPartClass = this.removePartClassMember(partType.id).subscribe(result => {
        if(result) {
          partType.partClassRefs = partType.partClassRefs.filter(t => t !== this.selectedClass.id);
        }
      });
    } else {
      this.subEditPartClass = this.addPartClassMember(partType.id).subscribe(result => {
        if(result) {
          partType.partClassRefs.push(this.selectedClass.id);
        }
      });
    }
  }

  reorderPartClass(partClassId: number, order: number, previousOrder: number): Observable<any> {
    return this.apiReqClassificationService.reorderPartClass({
      partClassId: partClassId, order: order, previousOrder: previousOrder
    });
  }

  removePartClassMember(partTypeId: number): Observable<boolean> {
    if(!this.selectedClass) return null;
    return this.apiReqClassificationService.removePartClassMember({
      partTypeId: partTypeId,
      partClassId: this.selectedClass.id,
      isPrimary: false
    });
  }

  addPartClassMember(partTypeId: number): Observable<PartClassMembershipDto | null> {
    if(!this.selectedClass) return null;
    return this.apiReqClassificationService.addPartClassMember({
      partTypeId: partTypeId,
      partClassId: this.selectedClass.id,
      isPrimary: true
    });
  }
}
