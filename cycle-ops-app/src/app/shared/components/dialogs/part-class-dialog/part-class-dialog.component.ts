import { Component, Inject } from '@angular/core';
import { 
  MatDialogRef, 
  MAT_DIALOG_DATA 
} from '@angular/material/dialog';
import { PartClassDto } from '../../../../../../../data/models/model.dto';
import { dialogConfig, dialogResult } from '../../../../../../../data/models/model.app';
import { PartsAdminReqService } from '../../../services/api-request-services/parts-admin-request-service/parts-admin-request.service';
import { Observable } from 'rxjs';
import { DialogService } from '../../../services/dialog-service/dialog.service';

@Component({
  selector: 'app-part-class-dialog',
  templateUrl: './part-class-dialog.component.html',
  styleUrl: './part-class-dialog.component.css'
})
export class PartClassDialogComponent {
  editData: PartClassDto;
  action: string = DialogService.DIALOG_ACTION_CLOSE;
  emptyData: PartClassDto = {
    id: null,
    order: null,
    name: null
  };

  constructor(
    private dialogRef: MatDialogRef<PartClassDialogComponent>,
    private apiReqPartsAdminService: PartsAdminReqService,
    @Inject(MAT_DIALOG_DATA) private dialogConfig: dialogConfig
  ) {
  }

  ngOnInit() {
    if(this.type === DialogService.DIALOG_TYPE_EDIT) {
      this.editData = { ...this.dialogConfig.data };
    } else {
      this.editData = this.emptyData;
    }
  }

  get config(): dialogConfig {
    return this.dialogConfig;
  }

  get type(): string {
    return this.dialogConfig.type;
  }

  get data(): PartClassDto {
    return this.config.data;
  }

  get title(): string {
    switch(this.type) {
      case DialogService.DIALOG_TYPE_EDIT:
        return `Edit Part Class: ${this.data.name}`;
      default:
        return 'New Part Class';
    }
  }

  private set data(value: PartClassDto) {
    this.dialogConfig.data = value;
  }

  done() {
    this.dialogRef.close({
      action: this.action,
      data: this.data
    } as dialogResult);
  }

  revert() {
    if(this.config.type = DialogService.DIALOG_TYPE_EDIT) {
      this.editData = this.data;
      return;
    }
    this.editData = this.emptyData;
  }

  save(close: boolean = true) {
    this.data = this.editData;
    if(close) {
      this.action = DialogService.DIALOG_ACTION_SAVECLOSE;
      this.done();
      return;
    }
    this.action = DialogService.DIALOG_ACTION_SAVENEW;
  }
}
