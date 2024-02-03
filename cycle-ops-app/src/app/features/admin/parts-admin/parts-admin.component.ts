import { Component } from '@angular/core';
import { PartsAdminReqService } from '../../../shared/services/api-request-services/parts-admin-request-service/parts-admin-request.service';
import { UserService } from '../../../shared/services/user-service/user.service';
import { AppService } from '../../../shared/services/app-service/app.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { PartClassDto, PartClassMembershipDto, PartTypeDto } from '../../../../../../data/models/model.dto';
import { Observable } from 'rxjs';

@Component({
  selector: 'admin-parts',
  templateUrl: './parts-admin.component.html',
  styleUrl: './parts-admin.component.scss'
})
export class PartsAdminComponent {

  partClassDataSource: MatTableDataSource<PartClassDto> = new MatTableDataSource();
  partTypeDataSource: MatTableDataSource<PartTypeDto> = new MatTableDataSource();
  partClassTableColumns: string[] = ["order", "name", "edit"];
  partTypeTableColumns: string[] = ["order", "name", "description", "edit"];

  selectedClass: PartClassDto | null = null;
  selectedTypes: (PartTypeDto | null)[] | null = null;

  constructor(
    private _appService: AppService,
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
