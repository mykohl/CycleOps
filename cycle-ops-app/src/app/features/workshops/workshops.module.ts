import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesModule } from '../../shared/modules/services.module';
import { MaterialModule } from '../../shared/modules/material.module';
import { WheelsComponent } from './wheels/wheels.component';

@NgModule({
  declarations: [
    WheelsComponent
  ],
  imports: [
    CommonModule,
    ServicesModule,
    MaterialModule
  ]
})
export class WorkshopsModule { }
