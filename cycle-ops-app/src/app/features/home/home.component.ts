import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import * as appModel from '../../../../../data/models/model.app';
import { AppService } from '../../shared/services/app-service/app.service';
import {
  trigger,
  transition,
  state,
  style,
  animate,
} from '@angular/animations';

export const fade = trigger('fade', [
  state('in', style({ opacity: 1 })),
  transition('void => *', [style({ opacity: 0 }), animate(500)]),
  transition('* => void', animate(500, style({ opacity: 0 }))),
]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [fade]
})
export class HomeComponent {
  router: Router;
  currentIndex = 0;
  animationState = 'in';

  constructor(
    router: Router,
    private zone: NgZone
  ) {
    this.router = router;
  }

  ngOnInit() {
    setInterval(() => {
      this.zone.run(() => {
        this.animationState = 'void';
        setTimeout(() => {
          this.currentIndex = (this.currentIndex + 1) % this.highlightComponents.length;
          this.animationState = 'in';
        }, 300)
      });
    }, 6500);
    /*
    fetch('https://www.googleapis.com/drive/v3/files/1TFmmMvjnOlxteZfbgnOSpFmsvjIZQMXIOuVlZUyaaiE/export?mimeType=text/plain&key=AIzaSyAwd11uAvXdf8qkUNEef-HUGLl1NYLV6Qc')
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error(error));
    */
  }

  imgSrc(src: string, img: string): string {
    return `${src}\/${img}`;
  }

  get highlightComponents(): appModel.component[] {
    return AppService.highlightComponents;
  }

  get activeSlide(): appModel.component {
    return this.highlightComponents[this.currentIndex];
  }

  get carouselItems(): appModel.component[] {
    return AppService.components;
  }

  get title(): string {
    return AppService.branding.title;
  }

  get tagline(): string {
    return AppService.branding.tagline;
  }
}
