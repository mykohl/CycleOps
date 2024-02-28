import { Injectable, Type } from '@angular/core';
import { DialogPosition, MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PartClassDialogComponent } from '../../components/dialogs/part-class-dialog/part-class-dialog.component';
import * as appModel from '../../../../../../data/models/model.app';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  static DIALOG_TYPE_EDIT: string = 'edit-item';
  static DIALOG_TYPE_NEW: string = 'new-item';
  static DIALOG_TYPE_INFO: string = 'info';
  static DIALOG_TYPE_CONFIRM: string = 'confirm';
  static DIALOG_ACTION_CLOSE: string = 'close';
  static DIALOG_ACTION_SAVECLOSE: string = 'save-close';
  static DIALOG_ACTION_SAVENEW: string = 'save-new';
  static DIALOG_ACTION_YES: string = 'yes';
  static DIALOG_ACTION_NO: string = 'no';

  constructor(
    private dialog: MatDialog
  ) {
  }

  openDialog<T extends PartClassDialogComponent> (
    dialogComponent: Type<T>,
    config: MatDialogConfig
  ): Observable<appModel.dialogResult> {
    const dialogRef = this.dialog.open(
      dialogComponent,
      config
    );

    return dialogRef.afterClosed().pipe(
      map(result => {
        return result;
      })
    );
  }
}
