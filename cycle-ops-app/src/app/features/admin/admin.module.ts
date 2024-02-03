import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesModule } from '../../shared/modules/services.module';
import { MaterialModule } from '../../shared/modules/material.module';
import { UserAdminComponent } from './user-admin/user-admin.component';
import { PartsAdminComponent } from './parts-admin/parts-admin.component';

@NgModule({
  declarations: [
    UserAdminComponent,
    PartsAdminComponent
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
