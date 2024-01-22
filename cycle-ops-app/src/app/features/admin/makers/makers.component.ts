import { Component } from '@angular/core';
import { ApiReqMakerService } from '../../../shared/services/api-request-services/maker-request-service/api-req-maker.service';
import { MakerDto } from '../../../../../../data/models/maker.model';
import { MatTableDataSource } from '@angular/material/table';

interface CustomColumnNames {
  [key: string]: string;
}

@Component({
  selector: 'app-makers',
  templateUrl: './makers.component.html',
  styleUrl: './makers.component.css',
})
export class MakersComponent {

  // Add a flag to determine if the first row is in edit mode
  isFirstRowEditing = false;

  startEditingFirstRow() {
    this.isFirstRowEditing = true;
  }

  saveFirstRow() {
    // Perform any logic to save the changes made to the first row
    this.isFirstRowEditing = false;
  }

  private _makers: MakerDto[] = [];
  displayedColumns: string[] = ['id', 'nameAbbreviation', 'nameShort', 'name', 'notes'];
  columnHeaders: CustomColumnNames = {
    id: 'Id',
    nameAbbreviation: 'Abbr.',
    nameShort: 'Short Name',
    name: 'Name',
    notes: 'Notes'
  };

  constructor(
    private _apiReqMakerService: ApiReqMakerService
  ) {}

  ngOnInit() {
    this.getAllMakers();
  }

  get allMakers(): MatTableDataSource<MakerDto> {
    return new MatTableDataSource<MakerDto>(this._makers);
  }

  private getAllMakers(): void {
    const allMakers = this._apiReqMakerService.getAllMakers().subscribe((response) => {
      this._makers = response;
    });
  }
}
