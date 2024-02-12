import { Component, Inject } from '@angular/core';
import { 
  MatDialogRef, 
  MAT_DIALOG_DATA 
} from '@angular/material/dialog';
import { PartClassDto } from '../../../../../../../data/models/model.dto';
import { dialogConfig, dialogResult } from '../../../../../../../data/models/model.app';
import { PartsAdminReqService } from '../../../services/api-request-services/parts-admin-request-service/parts-admin-request.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-part-class-dialog',
  templateUrl: './part-class-dialog.component.html',
  styleUrl: './part-class-dialog.component.css'
})
export class PartClassDialogComponent {
  editData: PartClassDto;

  constructor(
    private dialogRef: MatDialogRef<PartClassDialogComponent>,
    private apiReqPartsAdminService: PartsAdminReqService,
    @Inject(MAT_DIALOG_DATA) private dialogConfig: dialogConfig
  ) {
  }

  ngOnInit() {
    this.editData = { ...this.dialogConfig.data };
  }

  get config(): dialogConfig {
    return this.dialogConfig;
  }

  get data(): PartClassDto {
    return this.config.data;
  }

  private set data(value: PartClassDto) {
    this.dialogConfig.data = value;
  }

  done() {
    this.dialogRef.close({
      action: "close",
      data: this.data
    } as dialogResult);
  }

  revert() {
    if(this.config.type="edit-item") {
      this.editData = this.data;
      return;
    }
  }

  save(close: boolean = true) {
    this.apiReqPartsAdminService.updatePartClassification(this.editData).subscribe(result => {
      this.data = result;
      this.done();
    });
  }
}
