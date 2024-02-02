import { TestBed } from '@angular/core/testing';

import { PartsReqService } from './parts-request.service';

describe('PartsRequestServiceService', () => {
  let service: PartsReqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartsReqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
