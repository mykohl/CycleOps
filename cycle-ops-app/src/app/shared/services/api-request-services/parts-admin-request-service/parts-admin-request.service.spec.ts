import { TestBed } from '@angular/core/testing';

import { PartsAdminReqService } from './parts-admin-request.service';

describe('ClassificationRequestService', () => {
  let service: PartsAdminReqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartsAdminReqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
