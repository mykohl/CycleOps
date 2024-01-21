import { TestBed } from '@angular/core/testing';

import { ApiReqUserService } from './api-req-user.service';

describe('ApiReqUserService', () => {
  let service: ApiReqUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiReqUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
