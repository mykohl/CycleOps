import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { PartClassDto, PartClassMembershipDto, PartTypeDto } from '../../../../../../../data/models/model.dto';

@Injectable({
  providedIn: 'root'
})
export class PartsAdminReqService {

  private apiUrl = 'https://localhost/api/admin/parts';

  constructor(private http: HttpClient) {}

  getPartClassifications(): Observable<PartClassDto[]> {
    return from(this.http.get<any>(`${this.apiUrl}/classes`));
  }

  getPartTypes(): Observable<PartTypeDto[]> {
    return from(this.http.get<any>(`${this.apiUrl}/types`));
  }

  addPartClassMember(partClassMembershipDto: PartClassMembershipDto): Observable<PartClassMembershipDto> {
    return from(this.http.post<PartClassMembershipDto>(`${this.apiUrl}/classes/add-member`, partClassMembershipDto));
  }

  removePartClassMember(partClassMembershipDto: PartClassMembershipDto): Observable<boolean> {
    return from(this.http.post<boolean>(`${this.apiUrl}/classes/remove-member`, partClassMembershipDto));
  }

  reorderPartClass(reorderParams: { partClassId: number, order: number, previousOrder: number }) {
    return from(this.http.post<any>(`${this.apiUrl}/classes/reorder`, reorderParams));
  }
}
