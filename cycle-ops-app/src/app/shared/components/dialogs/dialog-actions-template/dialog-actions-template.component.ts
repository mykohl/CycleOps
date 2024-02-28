import { Component, Input, Output, EventEmitter } from '@angular/core';
import { dialogAction, dialogType } from '../../../../../../../data/models/model.app';
import { AppService } from '../../../services/app-service/app.service';

@Component({
  selector: 'app-dialog-actions-template',
  templateUrl: './dialog-actions-template.component.html',
  styleUrl: './dialog-actions-template.component.css'
})
export class DialogActionsTemplateComponent {
  @Input() type: string = null;
  @Output() done: EventEmitter<void> = new EventEmitter<void>();
  @Output() revert: EventEmitter<void> = new EventEmitter<void>();
  @Output() saveClose: EventEmitter<void> = new EventEmitter<void>();
  @Output() saveNew: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
  }

  get dialogType(): dialogType {
    return AppService.findDialogType(this.type);
  }

  get actions(): dialogAction[] {
    return this.dialogType.actions.sort((a, b) => a.order - b.order);
  }

  emitAction(actionName: string): void {
    switch(actionName) {
      case "saveClose":
        this.saveClose.emit();
        return;
      case "saveNew":
        this.saveNew.emit();
        return;
      case "revert":
        this.revert.emit();
        return;
      default:
        this.done.emit();
    }
  }
}
