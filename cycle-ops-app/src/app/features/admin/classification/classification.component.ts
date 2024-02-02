import { Component } from '@angular/core';
import { ClassificationReqService } from '../../../shared/services/api-request-services/classification-request-service/classification-request.service';
import { UserService } from '../../../shared/services/user-service/user.service';
import { AppService } from '../../../shared/services/app-service/app.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { PartClassDto, PartTypeDto } from '../../../../../../data/models/model.dto';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-classification',
  templateUrl: './classification.component.html',
  styleUrl: './classification.component.css'
})
export class ClassificationComponent {

  partClassDataSource: MatTableDataSource<PartClassDto> = new MatTableDataSource();
  partTypeDataSource: MatTableDataSource<PartTypeDto> = new MatTableDataSource();
  partClassTableColumns: string[] = ["order", "name"];
  partTypeTableColumns: string[] = [...this.partClassTableColumns, "description"];

  constructor(
    private _appService: AppService,
    private _apiReqClassificationService: ClassificationReqService,
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
}
