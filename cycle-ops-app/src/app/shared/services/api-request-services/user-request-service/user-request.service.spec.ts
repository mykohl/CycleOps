import { TestBed } from '@angular/core/testing';

import { UserReqService as UserReqService } from './user-request.service';

describe('ApiReqUserService', () => {
  let service: UserReqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserReqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
