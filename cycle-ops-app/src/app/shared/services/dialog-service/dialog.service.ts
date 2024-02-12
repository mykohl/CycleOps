import { Injectable, Type } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PartClassDialogComponent } from '../../components/dialogs/part-class-dialog/part-class-dialog.component';
import * as appModel from '../../../../../../data/models/model.app';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(
    private dialog: MatDialog
  ) {
  }

  openDialog<T extends PartClassDialogComponent> (
    dialogComponent: Type<T>,
    type: string,
    data: any,
    width: number
  ): Observable<appModel.dialogResult> {
    const dialogRef = this.dialog.open(
      dialogComponent,
      {
        width: `${width}px`,
        data: 
        { 
          type: type, 
          data: data 
        }
      }
    );

    return dialogRef.afterClosed().pipe(
      map(result => {
        return result;
      })
    );
  }
}
