import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsAdminComponent } from './parts-admin.component';

describe('ClassificationComponent', () => {
  let component: PartsAdminComponent;
  let fixture: ComponentFixture<PartsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartsAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
