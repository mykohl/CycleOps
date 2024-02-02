import { NgModule } from '@angular/core';
import { UserReqService } from '../services/api-request-services/user-request-service/user-request.service';
import { GoogleReqService } from '../services/api-request-services/google-request-service/google-request.service';
import { AppService } from '../services/app-service/app.service';
import { UserService } from '../services/user-service/user.service';

@NgModule({
  providers: [
    UserReqService,
    GoogleReqService,
    UserService,
    AppService
  ]
})
export class ServicesModule { }
