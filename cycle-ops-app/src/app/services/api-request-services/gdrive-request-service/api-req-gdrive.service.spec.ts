import { TestBed } from '@angular/core/testing';

import { ApiReqGdriveService } from './api-req-gdrive.service';

describe('ApiReqGdriveServiceService', () => {
  let service: ApiReqGdriveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiReqGdriveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
