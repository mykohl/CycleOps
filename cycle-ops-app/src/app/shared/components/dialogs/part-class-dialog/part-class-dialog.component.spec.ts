import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartClassDialogComponent } from './part-class-dialog.component';

describe('PartClassDialogComponent', () => {
  let component: PartClassDialogComponent;
  let fixture: ComponentFixture<PartClassDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartClassDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartClassDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
