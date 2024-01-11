import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-google-signin',
  templateUrl: './google-signin.component.html',
  styleUrls: ['./google-signin.component.css']
})
export class GoogleSigninComponent {
  constructor(private authService: AuthService) {}

  handleGoogleLogin() {
    this.authService.authenticateWithGoogle();
  }
}