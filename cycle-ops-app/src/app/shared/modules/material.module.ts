import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

const modules = [
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatIconModule,
  MatMenuModule,
  MatToolbarModule,
  MatTabsModule
];

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules
})
export class MaterialModule { }