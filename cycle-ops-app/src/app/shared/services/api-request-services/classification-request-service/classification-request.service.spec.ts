import { TestBed } from '@angular/core/testing';

import { ClassificationReqService } from './classification-request.service';

describe('ClassificationRequestService', () => {
  let service: ClassificationReqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassificationReqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
