import { Injectable } from '@angular/core';
import { UserService } from '../user-service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _userService: UserService) {
  }

  canActivate(rolesAllowed?: string[] | string): boolean {
    if(rolesAllowed === '*') return true;
    const isLoggedIn = this._userService?.siteUser ?? false;
    if(isLoggedIn && !rolesAllowed) return true;
    if(!this._userService.siteUser?.roles) return false;
    if(isLoggedIn && rolesAllowed?.includes(this._userService.siteUser.roles)) return true;
    return false;
  }
}
