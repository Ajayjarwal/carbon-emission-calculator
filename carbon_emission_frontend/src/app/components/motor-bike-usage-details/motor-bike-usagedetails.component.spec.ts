import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorBikeUsagedetailsComponent } from './motor-bike-usagedetails.component';

describe('MotorBikeUsagedetailsComponent', () => {
  let component: MotorBikeUsagedetailsComponent;
  let fixture: ComponentFixture<MotorBikeUsagedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MotorBikeUsagedetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorBikeUsagedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
