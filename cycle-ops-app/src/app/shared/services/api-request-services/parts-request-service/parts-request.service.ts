import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { SocialUser } from '@abacritt/angularx-social-login';
import { UserDto } from '../../../../../../../data/models/model.dto';
import { UserService } from '../../user-service/user.service';

@Injectable({
  providedIn: 'root'
})
export class PartsReqService {
  private apiUrl = 'https://localhost/api/parts';

  constructor(private http: HttpClient) {}
}
