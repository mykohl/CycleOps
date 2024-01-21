import { Component, ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap, take } from 'rxjs/operators';
import { of } from 'rxjs';
import { SocialAuthService, SocialUser, GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { UserService } from './shared/services/user-service/user.service';
import { ApiReqUserService } from './shared/services/api-request-services/user-request-service/api-req-user.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AppService } from './shared/services/app-service/app.service';
import { UserStatus, UserDto } from '../../../data/models/user.model';
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

  constructor(
    private _socialAuthService: SocialAuthService,
    private _userService: UserService,
    private _apiReqUserService: ApiReqUserService,
    private _dialog: MatDialog,
    private _appService: AppService,
    private _router: Router
  ) {}

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
          this.completeLogIn(response);
        },
        error: (error) => console.error('Update error:', error),
      });
  }

  get userStatus(): UserStatus {
    return this._userService.userStatus;
  }

  get features(): appModel.feature[] {
    return this._appService.features;
  }

  get highlightComponents(): any[] {
    return this._appService.highlightComponents;
  }

  get title(): string {
    return this._appService.branding.title;
  }

  get router(): Router {
    return this._router;
  }

  get userRole(): string {
    return this._userService.role;
  }

  get roleFeatures(): appModel.feature[] {
    return this._appService.getRoleFeatures(this.userRole);
  }

  userSignAction(): void {
    if(!this._socialUser) {
      this.openDialog(this._loginDialogTemplateRef);
    }
  }

  completeLogIn(siteUser: UserDto): void {
    this._userService.siteUser = siteUser;
    this.closeDialog();
  }

  openDialog(templateRef: TemplateRef<any>): void {
    this._dialogRef = this._dialog.open(templateRef);
  }

  closeDialog() {
    if(this._dialogRef) this._dialogRef.close();
  }

  refreshGoogleToken(): void {
    this._socialAuthService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }

  findComponent(id: string): appModel.component | undefined {
    return this._appService.findComponent(id);
  }
}