import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiReqGdriveService {
  private apiUrl = 'https://www.googleapis.com/drive/v3/files';

  constructor(private http: HttpClient) {}


}
