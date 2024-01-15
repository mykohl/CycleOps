import { NgModule } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
  MatDialogModule
} from '@angular/material/dialog';

const modules = [
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
];

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules
})
export class MaterialModule { }
