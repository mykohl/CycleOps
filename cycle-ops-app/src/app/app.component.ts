import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { ApiReqMakerService } from './services/api-req-maker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cycle-ops-app';
  makers: any[] = [];

  constructor(
    private authService: AuthService,
    private apiReqMakerService: ApiReqMakerService
  ) {}

  ngOnInit() {
    this.apiReqMakerService.getAllMakers().subscribe((data) => {
      this.makers = data;
    });
  }

  googleSignin() {
    this.authService.authenticateWithGoogle();
  }

  getAllMakers() {
    this.apiReqMakerService.getAllMakers();
  }
}