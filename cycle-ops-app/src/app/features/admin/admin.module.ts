import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesModule } from '../../shared/modules/services.module';
import { MaterialModule } from '../../shared/modules/material.module';
import { UserAdminComponent } from './user-admin/user-admin.component';
import { PartsClassAdminComponent } from './parts-class-admin/parts-class-admin.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    UserAdminComponent,
    PartsClassAdminComponent
  ],
  imports: [
    CommonModule,
    ServicesModule,
    MaterialModule,
    DragDropModule
  ],
  exports: [
  ]
})
export class AdminModule { }
