import { Component, ViewChild, ChangeDetectorRef, TemplateRef } from '@angular/core';
import { switchMap, take } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserDto } from "../../../data/models/user.model";
import { SocialAuthService, SocialUser, GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { UserService } from './services/user.service';
import { ApiReqUserService } from './services/api-request-services/api-req-user.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

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
  private _isLoginComplete: boolean = false;

  constructor(
    private _socialAuthService: SocialAuthService,
    private _apiReqUserService: ApiReqUserService,
    private _dialog: MatDialog,
    private _cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this._socialAuthService.authState
      .pipe(
        take(1),
        switchMap((socialUser) => {
          if (socialUser) {
            this._socialUser = socialUser;
            this._siteUser = UserService.getDto(socialUser);
            return this._apiReqUserService.updateUser(this._siteUser);
          }
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

  get userDisplayName(): string{
    return "";
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

  refreshGoogleToken(): void {
    this._socialAuthService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }
}