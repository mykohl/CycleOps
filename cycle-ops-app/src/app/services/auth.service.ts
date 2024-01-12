import { Injectable } from '@angular/core';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _user: SocialUser | null = null;
  private _authToken: string | null = null;

  constructor(
    private authService: SocialAuthService
  ) {}

  authenticateWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((user) => {
        this._user = user;
        this._authToken = user.authToken;
      })
      .catch((error) => {
        console.error('Google authentication error:', error);
      });
  }

  get user(): SocialUser | null {
    return this._user;
  }

  get isAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  get authToken(): string | null {
    return this._authToken;
  }

  signOut(): void {
    this.authService.signOut();
    this._user = null;
    // Additional logic, e.g., clear local storage or any other cleanup
  }
}
