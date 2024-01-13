import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SocialUser } from '@abacritt/angularx-social-login';
import { UserDto } from '../../../../../data/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class ApiReqUserService {
  private apiUrl = 'https://localhost/api/users';

  constructor(private http: HttpClient) {}

  updateUser(userData: UserDto | SocialUser): Observable<any> {
    return this.http.post(`${this.apiUrl}/update`, userData);
  }
}
