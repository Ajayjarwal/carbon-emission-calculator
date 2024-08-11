import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarUsageDetailsComponent } from './car-usage-details.component';

describe('CarUsageDetailsComponent', () => {
  let component: CarUsageDetailsComponent;
  let fixture: ComponentFixture<CarUsageDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarUsageDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarUsageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
