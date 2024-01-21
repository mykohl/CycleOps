import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesModule } from '../../shared/modules/services.module';
import { MaterialModule } from '../../shared/modules/material.module';
import { AdminComponent } from './admin.component';

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    ServicesModule,
    MaterialModule
  ]
})
export class AdminModule { }
