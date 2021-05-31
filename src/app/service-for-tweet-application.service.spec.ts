import { TestBed } from '@angular/core/testing';

import { ServiceForTweetApplicationService } from './service-for-tweet-application.service';

describe('ServiceForTweetApplicationService', () => {
  let service: ServiceForTweetApplicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceForTweetApplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
