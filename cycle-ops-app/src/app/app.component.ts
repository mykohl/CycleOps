import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cycle-ops-app';

  constructor(private authService: AuthService) {}

  googleSignin() {
    this.authService.authenticateWithGoogle();
  }
}