import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { PartClassDialogComponent } from '../components/dialogs/part-class-dialog/part-class-dialog.component';
import { DialogActionsTemplateComponent } from '../components/dialogs/dialog-actions-template/dialog-actions-template.component';

@NgModule({
  declarations: [
    PartClassDialogComponent,
    DialogActionsTemplateComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class DialogsModule { }
