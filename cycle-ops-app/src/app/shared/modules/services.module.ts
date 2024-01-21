import { NgModule } from '@angular/core';
import { ApiReqMakerService } from '../services/api-request-services/maker-request-service/api-req-maker.service';
import { ApiReqUserService } from '../services/api-request-services/user-request-service/api-req-user.service';
import { ApiReqGoogleService } from '../services/api-request-services/google-request-service/api-req-google.service';
import { AppService } from '../services/app-service/app.service';
import { UserService } from '../services/user-service/user.service';

@NgModule({
  providers: [
    ApiReqMakerService,
    ApiReqUserService,
    ApiReqGoogleService,
    UserService,
    AppService
  ]
})
export class ServicesModule { }
