import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiReqGoogleService } from '../services/api-request-services/google-request-service/api-req-google.service';
import { ApiReqMakerService } from '../services/api-request-services/maker-request-service/api-req-maker.service';
import * as appModel from '../../../../data/models/app.model';
import * as appData from '../app.data.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  router: Router;

  private _appSections: appModel.appSection[] = appData.sections as appModel.appSection[];
  currentIndex = 0;

  constructor(router: Router,
    private _apiReqGoogleService: ApiReqGoogleService,
    private _apiReqMakerService: ApiReqMakerService
  ) {
    this.router = router;
  }

  ngOnInit() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this._appSections.length;
    }, 4000);
    fetch('https://www.googleapis.com/drive/v3/files/1TFmmMvjnOlxteZfbgnOSpFmsvjIZQMXIOuVlZUyaaiE/export?mimeType=text/plain&key=AIzaSyAwd11uAvXdf8qkUNEef-HUGLl1NYLV6Qc')
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  }

  imgSrc(src: string, img: string): string {
    return `${src}\/${img}`;
  }

  get carouselItems(): appModel.appSection[] {
    return this._appSections;
  }
}
