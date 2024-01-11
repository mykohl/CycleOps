import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
  GoogleLoginProvider,
} from "@abacritt/angularx-social-login";
import { GoogleSigninComponent } from './google-signin/google-signin.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './services/auth-interceptor.service';
import { ApiReqMakerService } from './services/api-req-maker.service';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    GoogleSigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    HttpClientModule
  ],
  providers: [
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
    ApiReqMakerService,
    AuthService,
    AppRoutingModule,
    AuthInterceptor,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,     
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
