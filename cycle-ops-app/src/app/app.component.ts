import { Component, ViewChild, ChangeDetectorRef, TemplateRef } from '@angular/core';
import { switchMap, take } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserDto } from "../../../data/models/user.model";
import { SocialAuthService, SocialUser, GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { UserService } from './services/user.service';
import { ApiReqUserService } from './services/api-request-services/api-req-user.service';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent
} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('loginDialogTemplate') _loginDialogTemplateRef!: TemplateRef<any>;

  private _socialUser: SocialUser | null = null;
  private _siteUser: UserDto | null = null;
  private _dialogRef: MatDialogRef<any> | undefined;

  constructor(
    private _socialAuthService: SocialAuthService,
    private _apiReqUserService: ApiReqUserService,
    private _dialog: MatDialog
  ) {}

  ngOnInit() {
    this._socialAuthService.authState
      .pipe(
        take(1), // Take only the first emission
        switchMap((socialUser) => {
          if (socialUser) {
            this._socialUser = socialUser;
            this._siteUser = UserService.getDto(socialUser);
            return this._apiReqUserService.updateUser(this._siteUser);
          }
          // If no social user, return an observable with some default value or null
          return of(null);
        })
      )
      .subscribe({
        next: (response) => {
          this.completeLogIn();
        },
        error: (error) => console.error('Update error:', error),
      });
  }

  userSignAction(): void {
    if(!this._socialUser) {
      this.openDialog(this._loginDialogTemplateRef);
    }
  }

  completeLogIn(): void {
    this.closeDialog();
  }

  openDialog(templateRef: TemplateRef<any>): void {
    this._dialogRef = this._dialog.open(templateRef);
  }

  closeDialog() {
    if(this._dialogRef) this._dialogRef.close();
  }

  get userStatus(): { 
    title: string,
    showLoginOptions: boolean 
  } {
    if(this._socialUser) {
      return { 
        title: this._siteUser?.nameFirst ?? "",
        showLoginOptions: false 
      };
    }
    return {
      title: "Log-in | Register", 
      showLoginOptions: true
    };
  };

  refreshGoogleToken(): void {
    this._socialAuthService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }
}