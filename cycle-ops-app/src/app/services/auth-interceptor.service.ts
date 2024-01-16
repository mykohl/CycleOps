import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
  constructor(private _socialAuthService: SocialAuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this._socialAuthService.authState.pipe(
      switchMap(socialUser => {
        const authToken = socialUser?.idToken;
        console.log(authToken);
        if (authToken) {
          const authReq = req.clone({
            setHeaders: { 
              Authorization: `Bearer ${authToken}`,
              'X-Auth-Provider': socialUser.provider
            }
          });
          return next.handle(authReq);
        }

        return next.handle(req);
      })
    );
  }
}