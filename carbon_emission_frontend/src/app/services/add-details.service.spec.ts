import { TestBed } from '@angular/core/testing';

import { AddDetailsService } from './add-details.service';

describe('AddDetailsService', () => {
  let service: AddDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
