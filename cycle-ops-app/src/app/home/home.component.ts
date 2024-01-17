import { Component } from '@angular/core';
import { 
  MatCard, 
  MatCardContent, 
  MatCardSubtitle, 
  MatCardTitle,
  MatCardAvatar
} from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }
}
