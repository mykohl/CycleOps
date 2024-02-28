import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartTypeDialogComponent } from './part-type-dialog.component';

describe('PartTypeDialogComponent', () => {
  let component: PartTypeDialogComponent;
  let fixture: ComponentFixture<PartTypeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartTypeDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartTypeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
