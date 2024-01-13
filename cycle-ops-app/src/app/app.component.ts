import { Component } from '@angular/core';
import { SocialAuthService, SocialUser, GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { UserService} from './services/user.service';
import { ApiReqUserService } from './services/api-request-services/api-req-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cycle-ops-app';
  makers: any[] = [];
  private _socialUser: SocialUser | null = null;

  constructor(
    private _socialAuthService: SocialAuthService,
    private _userService: UserService,
    private _apiReqUserService: ApiReqUserService
  ) {}

  ngOnInit() {
    this._socialAuthService.authState.subscribe((socialUser) => {
      this._socialUser = socialUser;

      const userDto = this._userService.map(socialUser);

      console.log(userDto);

      this._apiReqUserService.updateUser(this._userService.map(socialUser));
      //console.log(socialUser);
    })
  }

  refreshGoogleToken(): void {
    this._socialAuthService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }
}