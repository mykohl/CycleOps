import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
/*
    if(this.authService.authToken){
      const authReq = req.clone({
        setHeaders: { Authorization: `Bearer ${this.authService.authToken}` },
      });
      return next.handle(authReq);
    } 
    */
    return next.handle(req);
    
  }

}