import { Component, ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap, take } from 'rxjs/operators';
import { of } from 'rxjs';
import { SocialAuthService, SocialUser, GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { UserService } from './shared/services/user-service/user.service';
import { UserReqService } from './shared/services/api-request-services/user-request-service/user-request.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AppService } from './shared/services/app-service/app.service';
import { UserStatus, UserDto } from '../../../data/models/model.dto';
import * as appModel from '../../../data/models/model.app';

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
    private socialAuthService: SocialAuthService,
    private userService: UserService,
    private apiReqUserService: UserReqService,
    private dialog: MatDialog,
    private appService: AppService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.socialAuthService.authState
      .pipe(
        take(1),
        switchMap((socialUser) => {
          if (socialUser) {
            this.userService.socialUser = socialUser;
            return this.apiReqUserService.updateUser(socialUser);
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
    return this.userService.userStatus;
  }

  get features(): appModel.feature[] {
    return AppService.features;
  }

  get highlightComponents(): any[] {
    return AppService.highlightComponents;
  }

  get title(): string {
    return AppService.branding.title;
  }

  get userRole(): string {
    return this.userService.role;
  }

  get roleFeatures(): appModel.feature[] {
    return AppService.getRoleFeatures(this.userRole);
  }

  userSignAction(): void {
    if(!this._socialUser) {
      this.openDialog(this._loginDialogTemplateRef);
    }
  }

  completeLogIn(siteUser: UserDto): void {
    this.userService.siteUser = siteUser;
    this.closeDialog();
  }

  openDialog(templateRef: TemplateRef<any>): void {
    this._dialogRef = this.dialog.open(templateRef);
  }

  closeDialog() {
    if(this._dialogRef) this._dialogRef.close();
  }

  refreshGoogleToken(): void {
    this.socialAuthService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }

  findComponent(id: string): appModel.component | undefined {
    return AppService.findComponent(id);
  }

  navigate(id: string) {
    const route = AppService.findComponent(id)?.route;
    this.router.navigate([route]);
  }
}