import { Injectable } from '@angular/core';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //private isAuthenticated: boolean = false;
  private user: SocialUser | null = null;

  constructor(private authService: SocialAuthService) {}

  authenticateWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((user) => {
        this.user = user;
        // Additional logic, e.g., send user data to the server
        // You can also store user details in a local storage or a service
      })
      .catch((error) => {
        console.error('Google authentication error:', error);
        // Handle errors, e.g., show a message to the user
      });
  }

  get authenticatedUser(): SocialUser | null {
    return this.user;
  }

  get isAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  signOut(): void {
    this.authService.signOut();
    this.user = null;
    // Additional logic, e.g., clear local storage or any other cleanup
  }
}
