import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogActionsTemplateComponent } from './dialog-actions-template.component';

describe('DialogActionsTemplateComponent', () => {
  let component: DialogActionsTemplateComponent;
  let fixture: ComponentFixture<DialogActionsTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogActionsTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogActionsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
