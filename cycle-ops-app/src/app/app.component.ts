import { Component, ViewChild, TemplateRef } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { switchMap, take } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserDto } from "../../../data/models/user.model";
import { SocialAuthService, SocialUser, GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { UserService } from './services/user-service/user.service';
import { ApiReqUserService } from './services/api-request-services/user-request-service/api-req-user.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AppService } from './services/app-service/app.service';
import * as appModel from '../../../data/models/app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('loginDialogTemplate') _loginDialogTemplateRef!: TemplateRef<any>;

  private _socialUser: SocialUser | null = null;
  private _dialogRef: MatDialogRef<any> | undefined;
  private _isLoginComplete: boolean = false;

  constructor(
    private _socialAuthService: SocialAuthService,
    private _userService: UserService,
    private _apiReqUserService: ApiReqUserService,
    private _dialog: MatDialog,
    private _appService: AppService
  ) {
  }

  ngOnInit() {
    this._socialAuthService.authState
      .pipe(
        take(1),
        switchMap((socialUser) => {
          if (socialUser) {
            this._userService.socialUser = socialUser;
            return this._apiReqUserService.updateUser(UserService.getDto(socialUser));
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
    this._isLoginComplete = true;
  }

  openDialog(templateRef: TemplateRef<any>): void {
    this._dialogRef = this._dialog.open(templateRef);
  }

  closeDialog() {
    if(this._dialogRef) this._dialogRef.close();
  }

  get userService(): UserService {
    return this._userService;
  }

  refreshGoogleToken(): void {
    this._socialAuthService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }

  findSection(id: string): appModel.appSection | undefined {
    return this._appService.findSection(id);
  }

  get menu(): appModel.appMenu[] {
    return this._appService.menu;
  }

  get sections(): any[] {
    return this._appService.sections;
  }

  get title(): string {
    return this._appService.branding.title;
  }
}