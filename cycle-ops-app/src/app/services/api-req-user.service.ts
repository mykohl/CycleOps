import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SocialUser } from '@abacritt/angularx-social-login';

@Injectable({
  providedIn: 'root',
})
export class ApiReqUserService {
  private apiUrl = 'https://localhost/api/users';

  constructor(private http: HttpClient) {}

  updateUser(userData: SocialUser): Observable<any> {
    return this.http.post(`${this.apiUrl}/update`, userData);
  }
}
