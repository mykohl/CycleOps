import { NgModule } from '@angular/core';
import { UserReqService } from '../services/api-request-services/user-request-service/user-request.service';
import { GoogleReqService } from '../services/api-request-services/google-request-service/google-request.service';
import { AppService } from '../services/app-service/app.service';
import { UserService } from '../services/user-service/user.service';
import { PartsReqService } from '../services/api-request-services/parts-request-service/parts-request.service';
import { ClassificationReqService } from '../services/api-request-services/classification-request-service/classification-request.service';

@NgModule({
  providers: [
    UserReqService,
    PartsReqService,
    ClassificationReqService,
    GoogleReqService,
    UserService,
    AppService
  ]
})
export class ServicesModule { }
