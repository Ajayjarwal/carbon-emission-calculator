import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravellingDetailsComponent } from './travelling-details.component';

describe('TravellingDetailsComponent', () => {
  let component: TravellingDetailsComponent;
  let fixture: ComponentFixture<TravellingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TravellingDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravellingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
