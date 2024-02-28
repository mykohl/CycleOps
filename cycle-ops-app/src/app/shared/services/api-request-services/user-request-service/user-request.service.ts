import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { SocialUser } from '@abacritt/angularx-social-login';
import { UserDto } from '../../../../../../../data/models/model.dto';
import { UserService } from '../../user-service/user.service';

@Injectable({
  providedIn: 'root',
})
export class UserReqService {
  private apiUrl = 'https://localhost/api/admin/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return from(this.http.get<any>(`${this.apiUrl}`));
  }

  updateUser(userData: UserDto | SocialUser): Observable<any> {
    if(userData instanceof SocialUser) userData = UserService.getDto(userData);
    return from(this.http.post<any>(`${this.apiUrl}/update`, userData));
  }
}
