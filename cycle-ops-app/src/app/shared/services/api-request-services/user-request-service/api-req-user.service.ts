import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { SocialUser } from '@abacritt/angularx-social-login';
import { UserDto } from '../../../../../../../data/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class ApiReqUserService {
  private apiUrl = 'https://localhost/api/users';

  constructor(private http: HttpClient) {}

  updateUser(userData: UserDto | SocialUser): Observable<any> {
    return from(this.http.post<any>(`${this.apiUrl}/update`, userData));
  }
}
