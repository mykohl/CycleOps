import { Injectable } from '@angular/core';
import { SocialUser } from '@abacritt/angularx-social-login';
import { UserDto } from "../../../../data/models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }

  static getDto(socialUser: SocialUser): UserDto {
      return {
        providerId: socialUser.id,
        provider: socialUser.provider,
        name: socialUser.name,
        nameLast: socialUser.lastName,
        nameFirst: socialUser.firstName
      };
    }
}