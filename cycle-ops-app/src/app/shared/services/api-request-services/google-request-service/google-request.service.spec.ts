import { TestBed } from '@angular/core/testing';

import { GoogleReqService } from './google-request.service';

describe('ApiReqGdriveServiceService', () => {
  let service: GoogleReqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleReqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
