import { NgModule } from '@angular/core';
import { UserReqService } from '../services/api-request-services/user-request-service/user-request.service';
import { GoogleReqService } from '../services/api-request-services/google-request-service/google-request.service';
import { AppService } from '../services/app-service/app.service';
import { UserService } from '../services/user-service/user.service';
import { PartsReqService } from '../services/api-request-services/parts-request-service/parts-request.service';
import { PartsAdminReqService } from '../services/api-request-services/parts-admin-request-service/parts-admin-request.service';
import { DialogService } from '../services/dialog-service/dialog.service';

@NgModule({
  providers: [
    UserReqService,
    PartsReqService,
    PartsAdminReqService,
    DialogService,
    GoogleReqService,
    UserService,
    AppService
  ]
})
export class ServicesModule { }
