import { Component } from '@angular/core';
import { ApiReqMakerService } from '../../../shared/services/api-request-services/maker-request-service/api-req-maker.service';
import { MakerDto } from '../../../../../../data/models/maker.model';

@Component({
  selector: 'app-makers',
  templateUrl: './makers.component.html',
  styleUrl: './makers.component.css',
})
export class MakersComponent {
  private _makers: MakerDto[] = [];
  displayedColumns: string[] = ['nameAbbreviation', 'nameShort', 'name', 'notes'];

  constructor(
    private _apiReqMakerService: ApiReqMakerService
  ) {}

  ngOnInit() {
    this.getAllMakers();
  }

  get allMakers(): MakerDto[] {
    return this._makers;
  }

  private getAllMakers(): void {
    const allMakers = this._apiReqMakerService.getAllMakers().subscribe((response) => {
      this._makers = response;
    });
  }
}
