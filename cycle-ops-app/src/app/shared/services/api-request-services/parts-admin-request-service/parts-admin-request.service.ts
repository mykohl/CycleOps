import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { PartClassDto, PartClassMembershipDto, PartTypeDto } from '../../../../../../../data/models/model.dto';

@Injectable({
  providedIn: 'root'
})
export class PartsAdminReqService {

  private apiUrl = 'https://localhost/api/admin/classification';

  constructor(private http: HttpClient) {}

  getPartClassifications(): Observable<PartClassDto[]> {
    return from(this.http.get<any>(`${this.apiUrl}/parts/classes`));
  }

  getPartTypes(): Observable<PartTypeDto[]> {
    return from(this.http.get<any>(`${this.apiUrl}/parts/types`));
  }

  addPartClassMember(partClassMembershipDto: PartClassMembershipDto): Observable<PartClassMembershipDto> {
    return from(this.http.post<PartClassMembershipDto>(`${this.apiUrl}/parts/classes/add-member`, partClassMembershipDto));
  }

  removePartClassMember(partClassMembershipDto: PartClassMembershipDto): Observable<boolean> {
    return from(this.http.post<boolean>(`${this.apiUrl}/parts/classes/remove-member`, partClassMembershipDto));
  }
}
