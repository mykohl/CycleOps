import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { EditDialogComponent } from '../../components/dialogs/edit-dialog/edit-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  openEditDialog(data: any): Observable<any> {
    const dialogRef: MatDialogRef<EditDialogComponent> = this.dialog.open(EditDialogComponent, 
      {
        width: '400px',
        data: data,
      }
    );

    return dialogRef.afterClosed().pipe(
      map(result => {
        // Process the result or handle cancellation
        return result;
      })
    );
  }
}
