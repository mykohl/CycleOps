import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsClassAdminComponent } from './parts-class-admin.component';

describe('ClassificationComponent', () => {
  let component: PartsClassAdminComponent;
  let fixture: ComponentFixture<PartsClassAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartsClassAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartsClassAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
