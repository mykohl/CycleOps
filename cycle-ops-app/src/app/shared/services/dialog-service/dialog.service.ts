import { Injectable, Type } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PartClassDialogComponent } from '../../components/dialogs/part-class-dialog/part-class-dialog.component';
import { dialogResult } from '../../../../../../data/models/model.app';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) {
  }

  openDialog<T extends PartClassDialogComponent> (
    dialogComponent: Type<T>,
    data: any,
    width: number
  ): Observable<dialogResult> {
    const dialogRef = this.dialog.open(
      dialogComponent,
      {
        width: `${width}px`,
        data: data,
      }
    );

    return dialogRef.afterClosed().pipe(
      map(result => {
        return result;
      })
    );
  }
}
