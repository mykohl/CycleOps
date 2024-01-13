import { TestBed } from '@angular/core/testing';

import { ApiReqMakerService } from './api-req-maker.service';

describe('ApiReqMakerService', () => {
  let service: ApiReqMakerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiReqMakerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
