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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/material.module';
import { AuthInterceptor } from './shared/services/auth-interceptor-service/auth-interceptor.service';
import { HomeComponent } from './features/home/home.component';
import { ServicesModule } from './shared/modules/services.module';
import { AdminModule } from './features/admin/admin.module';
import { WorkshopsModule } from './features/workshops/workshops.module';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    HttpClientModule,
    GoogleSigninButtonModule,
    BrowserAnimationsModule,
    MaterialModule,
    DragDropModule,
    ServicesModule,
    AdminModule,
    WorkshopsModule
  ],
  providers: [
    AppRoutingModule,
    AuthInterceptor,
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
