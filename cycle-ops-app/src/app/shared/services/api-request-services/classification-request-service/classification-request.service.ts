import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { PartClassDto, PartTypeDto } from '../../../../../../../data/models/model.dto';

@Injectable({
  providedIn: 'root'
})
export class ClassificationReqService {

  private apiUrl = 'https://localhost/api/admin/classification';

  constructor(private http: HttpClient) {}

  getPartClassifications(): Observable<PartClassDto[]> {
    return from(this.http.get<any>(`${this.apiUrl}`));
  }

  getPartTypes(): Observable<PartTypeDto[]> {
    return from(this.http.get<any>(`${this.apiUrl}/parts/types`));
  }
}
