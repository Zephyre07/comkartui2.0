import { TestBed } from '@angular/core/testing';

import { ComkartServiceService } from './comkart-service.service';

describe('ComkartServiceService', () => {
  let service: ComkartServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComkartServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
