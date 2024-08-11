import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseholdEmissionDetailsComponent } from './household-emission-details.component';

describe('HouseholdEmissionDetailsComponent', () => {
  let component: HouseholdEmissionDetailsComponent;
  let fixture: ComponentFixture<HouseholdEmissionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HouseholdEmissionDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseholdEmissionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
