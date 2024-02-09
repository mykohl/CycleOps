import { Component, ViewChild, Type } from '@angular/core';
import { Observable } from 'rxjs';
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
import { UserService } from '../../../shared/services/user-service/user.service';
import { AppService } from '../../../shared/services/app-service/app.service';
import { 
  PartClassDto, 
  PartClassMembershipDto, 
  PartTypeDto 
} from '../../../../../../data/models/model.dto';
import { DialogService } from '../../../shared/services/dialog-service/dialog.service';
import { PartClassDialogComponent } from '../../../shared/components/dialogs/part-class-dialog/part-class-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { dialogResult } from '../../../../../../data/models/model.app';

@Component({
  selector: 'admin-parts',
  templateUrl: './parts-class-admin.component.html',
  styleUrl: './parts-class-admin.component.scss'
})
export class PartsClassAdminComponent {

  @ViewChild('partClassTable', { static: true }) partClassTable: MatTable<PartClassDto>;

  partClassDataSource: MatTableDataSource<PartClassDto> = new MatTableDataSource();
  partTypeDataSource: MatTableDataSource<PartTypeDto> = new MatTableDataSource();
  partClassTableColumns: string[] = ["order", "name", "edit"];
  partTypeTableColumns: string[] = ["order", "name", "description", "edit"];
  partClassDragDisabled: boolean = false;
  selectedClass: PartClassDto | null = null;
  selectedTypes: (PartTypeDto | null)[] | null = null;
  editingClass: number | null = null;

  constructor(
    private _appService: AppService,
    private _dialogService: DialogService,
    private _apiReqClassificationService: PartsAdminReqService,
    private _Service: UserService,
    private _snackBar: MatSnackBar) {
  }

  ngAfterViewInit() {
    this.fetchPartClassData().subscribe(partClassData => {
      this.partClassDataSource.data = partClassData;
    });
    this.fetchPartTypeData().subscribe(partTypeData => {
      this.partTypeDataSource.data = partTypeData;
    });
  }

  fetchPartClassData(): Observable<PartClassDto[]> {
    return this._apiReqClassificationService.getPartClassifications();
  }

  fetchPartTypeData(): Observable<PartTypeDto[]> {
    return this._apiReqClassificationService.getPartTypes();
  }

  partTypeInClass(partType: PartTypeDto | null): boolean {
    if(partType && this.selectedClass) return partType.partClassRefs.includes(this.selectedClass.id);
    return false;
  }

  editPartClass(i: number) {
    this.editingClass = i;
    this.partClassDragDisabled = true;
    this._dialogService.openDialog (
      PartClassDialogComponent,
      this.partClassDataSource.data[i],
      250
    ).subscribe(() => {
      this.partClassDragDisabled = false;
      this.editingClass = null;
    });
  }

  dropPartClass(dropEvent: any) {
    this.partClassDragDisabled = true;
    const drop = dropEvent as CdkDragDrop<PartClassDto[]>;
    const previousIndex = this.partClassDataSource.data.findIndex((d) => d === drop.item.data);
    moveItemInArray(this.partClassDataSource.data, previousIndex, drop.currentIndex);
    this.reorderPartClass(drop.item.data['id'], drop.currentIndex + 1, previousIndex + 1).subscribe(result => {
      this.partClassTable.renderRows();
      this.partClassDragDisabled = false;
    });
  }

  toggleInClass(partType: PartTypeDto | null) {
    if(!partType || !this.selectedClass) return;
    if(partType.partClassRefs.includes(this.selectedClass.id)) {
      this.removePartClassMember(partType.id).subscribe(result => {
        if(result) {
          partType.partClassRefs = partType.partClassRefs.filter(t => t !== this.selectedClass.id);
        }
      });
    } else {
      this.addPartClassMember(partType.id).subscribe(result => {
        if(result) {
          partType.partClassRefs.push(this.selectedClass.id);
        }
      });
    }
  }

  reorderPartClass(partClassId: number, order: number, previousOrder: number): Observable<any> {
    return this._apiReqClassificationService.reorderPartClass({
      partClassId: partClassId, order: order, previousOrder: previousOrder
    });
  }

  removePartClassMember(partTypeId: number): Observable<boolean> {
    if(!this.selectedClass) return null;
    return this._apiReqClassificationService.removePartClassMember({
      partTypeId: partTypeId,
      partClassId: this.selectedClass.id,
      isPrimary: false
    });
  }

  addPartClassMember(partTypeId: number): Observable<PartClassMembershipDto | null> {
    if(!this.selectedClass) return null;
    return this._apiReqClassificationService.addPartClassMember({
      partTypeId: partTypeId,
      partClassId: this.selectedClass.id,
      isPrimary: true
    });
  }
}
