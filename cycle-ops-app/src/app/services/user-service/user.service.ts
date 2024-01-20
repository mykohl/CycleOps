import { Injectable } from '@angular/core';
import { SocialUser } from '@abacritt/angularx-social-login';
import { UserDto } from "../../../../../data/models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }

  private _socialUser: SocialUser | null = null;
  private _siteUser: UserDto | null = null;

  static getDto(socialUser: SocialUser): UserDto {
    return {
      providerId: socialUser.id,
      provider: socialUser.provider,
      name: socialUser.name,
      nameLast: socialUser.lastName,
      nameFirst: socialUser.firstName
    };
  }

  get userStatus(): { 
    actionTitle: string,
    actionColor: string,
    actionIcon: string
  } {
    if(this._socialUser) {
      return { 
        actionTitle: this._siteUser?.nameFirst ?? "",
        actionColor: "primary",
        actionIcon: "how_to_reg"
      };
    }
    return {
      actionTitle: "Log-in | Register",
      actionColor: "accent",
      actionIcon: "account_circle"
    };
  };

  get socialUser(): SocialUser | null {
    return this._socialUser;
  }

  get siteUser(): UserDto | null {
    return this._siteUser;
  }

  set socialUser(setSocialUser: SocialUser) {
    this._socialUser = setSocialUser;
    this._siteUser = UserService.getDto(setSocialUser);
  }

  set siteUser(setSiteUser: UserDto) {
    this._siteUser = setSiteUser;
  }
}