import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffsetsDetailsComponent } from './offsets-details.component';

describe('OffsetsDetailsComponent', () => {
  let component: OffsetsDetailsComponent;
  let fixture: ComponentFixture<OffsetsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OffsetsDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffsetsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
