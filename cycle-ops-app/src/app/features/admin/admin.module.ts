import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesModule } from '../../shared/modules/services.module';
import { MaterialModule } from '../../shared/modules/material.module';
import { MakersComponent } from './makers/makers.component';

@NgModule({
  declarations: [
    MakersComponent
  ],
  imports: [
    CommonModule,
    ServicesModule,
    MaterialModule
  ],
  exports: [
    MakersComponent
  ]
})
export class AdminModule { }
