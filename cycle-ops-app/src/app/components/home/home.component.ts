import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { ApiReqGoogleService } from '../../services/api-request-services/google-request-service/api-req-google.service';
import { ApiReqMakerService } from '../../services/api-request-services/maker-request-service/api-req-maker.service';
import * as appModel from '../../../../../data/models/app.model';
import { AppService } from '../../services/app-service/app.service';
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
  private _appSections: appModel.appSection[] = this._appService.sections as appModel.appSection[];
  currentIndex = 0;
  animationState = 'in';

  constructor(router: Router,
    private _apiReqGoogleService: ApiReqGoogleService,
    private _apiReqMakerService: ApiReqMakerService,
    private _appService: AppService,
    private _zone: NgZone
  ) {
    this.router = router;
  }

  ngOnInit() {
    setInterval(() => {
      this._zone.run(() => {
        this.animationState = 'void';
        setTimeout(() => {
          this.currentIndex = (this.currentIndex + 1) % this._appSections.length;
          this.animationState = 'in';
        }, 300)
      });
    }, 5000);
    /*
    fetch('https://www.googleapis.com/drive/v3/files/1TFmmMvjnOlxteZfbgnOSpFmsvjIZQMXIOuVlZUyaaiE/export?mimeType=text/plain&key=AIzaSyAwd11uAvXdf8qkUNEef-HUGLl1NYLV6Qc')
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error(error));
    */
  }

  getSectionPath(id: string): string | undefined {
    return this._appService.getSectionPath(id);
  }

  imgSrc(src: string, img: string): string {
    return `${src}\/${img}`;
  }

  get activeSlide(): appModel.appSection {
    return this._appSections[this.currentIndex];
  }

  get carouselItems(): appModel.appSection[] {
    return this._appService.sections;
  }

  get title(): string {
    return this._appService.branding.title;
  }

  get tagline(): string {
    return this._appService.branding.tagline;
  }
}
