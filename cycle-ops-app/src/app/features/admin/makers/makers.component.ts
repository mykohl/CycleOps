import { Component } from '@angular/core';
import { ApiReqMakerService } from '../../../shared/services/api-request-services/maker-request-service/api-req-maker.service';
import { ProducerDto } from '../../../../../../data/models/producer.model';
import { MatTableDataSource } from '@angular/material/table';
import {animate, state, style, transition, trigger} from '@angular/animations';

interface CustomColumnNames {
  [key: string]: string;
}

@Component({
  selector: 'app-makers',
  templateUrl: './makers.component.html',
  styleUrl: './makers.component.css',
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class MakersComponent {
  private _makers: ProducerDto[] = [];
  displayedColumns: string[] = ['id', 'nameAbbreviation', 'nameShort', 'name', 'notes', 'webAddress'];
  displayedExpandedColumns = [...this.displayedColumns, 'expand'];
  columnHeaders: CustomColumnNames = {
    id: 'Id',
    nameAbbreviation: 'Abbr.',
    nameShort: 'Short Name',
    name: 'Name',
    webAddress: 'Website',
    notes: 'Notes'
  };

  constructor(
    private _apiReqMakerService: ApiReqMakerService
  ) {}

  ngOnInit() {
    this.getAllMakers();
  }

  get allMakers(): MatTableDataSource<ProducerDto> {
    return new MatTableDataSource<ProducerDto>(this._makers);
  }

  private getAllMakers(): void {
    const allMakers = this._apiReqMakerService.getAllMakers().subscribe((response) => {
      this._makers = response;
    });
  }
}
