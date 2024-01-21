import { TestBed } from '@angular/core/testing';

import { ApiReqGoogleService } from './api-req-google.service';

describe('ApiReqGdriveServiceService', () => {
  let service: ApiReqGoogleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiReqGoogleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
