import { TestBed } from '@angular/core/testing';

import { PartsRequestServiceService } from './parts-request.service';

describe('PartsRequestServiceService', () => {
  let service: PartsRequestServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartsRequestServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
