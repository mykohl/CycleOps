import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { switchMap, map, take } from 'rxjs/operators';
import { Subscription, Observable, of } from 'rxjs';
import { UserDto } from "../../../data/models/user.model";
import { SocialAuthService, SocialUser, GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { UserService } from './services/user.service';
import { ApiReqUserService } from './services/api-request-services/api-req-user.service';
import { MatExpansionPanel } from "@angular/material/expansion";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('userStatusPanel', { static: false }) userStatusPanel: MatExpansionPanel | undefined;

  private _socialUser: SocialUser | null = null;
  private _siteUser: UserDto | null = null;

  constructor(
    private _socialAuthService: SocialAuthService,
    private _apiReqUserService: ApiReqUserService,
    private _userService: UserService,
    private _cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
    this._socialAuthService.authState
      .pipe(
        take(1), // Take only the first emission
        switchMap((socialUser) => {
          if (socialUser) {
            this._socialUser = socialUser;
            this._siteUser = UserService.map(socialUser);
            return this._apiReqUserService.updateUser(this._siteUser);
          }
          // If no social user, return an observable with some default value or null
          return of(null);
        })
      )
      .subscribe({
        next: (response) => {
          console.log('Update response: ', response);
          this.completeLogIn();
        },
        error: (error) => console.error('Update error:', error),
      });
  }

  completeLogIn(): void {
    if(this.userStatusPanel) { 
      this.userStatusPanel.close();
    }
  }

  get userStatus(): { 
    panelTitle: string,
    showLoginOptions: boolean 
  } {
    if(this._socialUser) {
      return { 
        panelTitle: this._siteUser?.nameFirst ?? "",
        showLoginOptions: false 
      };
    }
    return {
      panelTitle: "Log-in | Register", 
      showLoginOptions: true
    };
  };

  refreshGoogleToken(): void {
    this._socialAuthService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }
}