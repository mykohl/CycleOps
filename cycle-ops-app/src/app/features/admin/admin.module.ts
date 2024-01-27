import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesModule } from '../../shared/modules/services.module';
import { MaterialModule } from '../../shared/modules/material.module';

@NgModule({
  declarations: [
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
