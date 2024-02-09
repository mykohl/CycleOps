import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog-actions-template',
  templateUrl: './dialog-actions-template.component.html',
  styleUrl: './dialog-actions-template.component.css'
})
export class DialogActionsTemplateComponent {
  @Input() saveTitle: string = "Save";
  @Input() cancelTitle: string = "Cancel";
  @Input() revertTitle: string = "Revert";
  @Output() save: EventEmitter<void> = new EventEmitter<void>();
  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();
  @Output() revert: EventEmitter<void> = new EventEmitter<void>();
}
