import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiReqMakerService {
  private apiUrl = 'http://localhost:8080/api'; // Adjust this URL based on your Express server configuration

  constructor(private http: HttpClient) {}

  getAllMakers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/makers`);
  }

  updateMaker(makerData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/makers/update`, makerData);
  }
}