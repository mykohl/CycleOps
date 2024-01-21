import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
  GoogleLoginProvider,
  GoogleSigninButtonModule
} from "@abacritt/angularx-social-login";
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AuthInterceptor } from './services/auth-interceptor-service/auth-interceptor.service';
import { ApiReqMakerService } from './services/api-request-services/maker-request-service/api-req-maker.service';
import { ApiReqUserService } from './services/api-request-services/user-request-service/api-req-user.service';
import { ApiReqGoogleService } from './services/api-request-services/google-request-service/api-req-google.service';
import { AppService } from './services/app-service/app.service';
import { UserService } from './services/user-service/user.service';
import { HomeComponent } from './components/home/home.component';
import { WheelWorkshopComponent } from './components/wheel-workshop/wheel-workshop.component';
import { AdminModule } from './components/admin/admin.module';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WheelWorkshopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    HttpClientModule,
    GoogleSigninButtonModule,
    BrowserAnimationsModule,
    MaterialModule,
    AdminModule
  ],
  providers: [
    ApiReqMakerService,
    ApiReqUserService,
    ApiReqGoogleService,
    AppRoutingModule,
    AuthInterceptor,
    UserService,
    AppService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '995643129207-dqa7t4sgvj1suppr2vrfk48kbhrouspf.apps.googleusercontent.com', {
                scopes: 'openid profile email',
            }),
          },
        ],
        onError: (err) => {
          console.error(err);
        },
      } as SocialAuthServiceConfig,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,     
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
