import { Injectable } from '@angular/core';
import { UserService } from '../user-service/user.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _userService: UserService,
    private _router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const rolesAllowed: string[] | string | undefined = route.data['rolesAllowed'];
    if(rolesAllowed === '*') return true;
    const isLoggedIn = this._userService?.siteUser ?? false;
    if(isLoggedIn && !rolesAllowed) return true;
    if(!this._userService.siteUser?.roles) return false;
    if(isLoggedIn && rolesAllowed?.includes(this._userService.siteUser.roles)) return true;
    return false;
  }
}
