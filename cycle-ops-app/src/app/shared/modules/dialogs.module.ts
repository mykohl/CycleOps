import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { PartClassDialogComponent } from '../components/dialogs/part-class-dialog/part-class-dialog.component';
import { DialogActionsTemplateComponent } from '../components/dialogs/dialog-actions-template/dialog-actions-template.component';
import { PartTypeDialogComponent } from '../components/dialogs/part-type-dialog/part-type-dialog.component';

@NgModule({
  declarations: [
    DialogActionsTemplateComponent,
    PartClassDialogComponent,
    PartTypeDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ]
})
export class DialogsModule { }
