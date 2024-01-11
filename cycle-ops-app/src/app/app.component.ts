import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'cycle-ops-app';

  authSubscription!: Subscription;

  constructor(private authService: SocialAuthService) {}
  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

  ngOnInit() {
    this.authSubscription = this.authService.authState.subscribe((user) => {
      console.log('user', user);
    });
  }

  googleSignin(googleWrapper: any) {
    googleWrapper.click();
  }  
}
