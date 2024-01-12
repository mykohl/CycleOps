import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiReqMakerService {
  private apiUrl = 'https://localhost/api/makers';

  constructor(private http: HttpClient) {}

  getAllMakers(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  updateMaker(makerData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/update`, makerData);
  }
}