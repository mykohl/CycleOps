import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheelWorkshopComponent } from './wheels.component';

describe('WheelWorkshopComponent', () => {
  let component: WheelWorkshopComponent;
  let fixture: ComponentFixture<WheelWorkshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WheelWorkshopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WheelWorkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
