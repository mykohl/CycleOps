import { Component, Inject } from '@angular/core';
import { 
  MatDialogRef, 
  MAT_DIALOG_DATA 
} from '@angular/material/dialog';
import { PartClassDto } from '../../../../../../../data/models/model.dto';
import { dialogResult } from '../../../../../../../data/models/model.app';

@Component({
  selector: 'app-part-class-dialog',
  templateUrl: './part-class-dialog.component.html',
  styleUrl: './part-class-dialog.component.css'
})
export class PartClassDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<PartClassDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PartClassDto
  ) {
  }

  onCancel() {
    this.dialogRef.close({
      action: "close",
      data: null
    } as dialogResult);
  }

  onSave() {
  }

  onRevert() {
  }
}
