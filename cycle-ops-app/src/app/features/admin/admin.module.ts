import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesModule } from '../../shared/modules/services.module';
import { MaterialModule } from '../../shared/modules/material.module';
import { UserComponent } from './user/user.component';
import { ClassificationComponent } from './classification/classification.component';

@NgModule({
  declarations: [
    UserComponent,
    ClassificationComponent
  ],
  imports: [
    CommonModule,
    ServicesModule,
    MaterialModule
  ],
  exports: [
  ]
})
export class AdminModule { }
