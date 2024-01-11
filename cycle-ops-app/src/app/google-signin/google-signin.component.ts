import { Component, EventEmitter, Output } from '@angular/core';

declare global {
  interface Window {
    google: any;
  }
}

@Component({
  selector: 'app-google-signin',
  templateUrl: './google-signin.component.html',
  styleUrls: ['./google-signin.component.css']
})
export class GoogleSigninComponent {
  @Output() loginWithGoogle: EventEmitter<any> = new EventEmitter<any>();

  handleGoogleLogin() {
    // Create a div to render the Google sign-in button directly
    const googleLoginWrapper = document.createElement('div');
    googleLoginWrapper.style.display = 'none';
    googleLoginWrapper.classList.add('custom-google-button');
    document.body.appendChild(googleLoginWrapper);

    // Render the Google sign-in button
    window.google.accounts.id.renderButton(googleLoginWrapper, {
      type: 'icon',
      width: '200',
    });

    // Trigger the click event on the rendered button
    const googleLoginWrapperButton = googleLoginWrapper.querySelector('div[role=button]') as HTMLElement;
    googleLoginWrapperButton?.click();
  }
}