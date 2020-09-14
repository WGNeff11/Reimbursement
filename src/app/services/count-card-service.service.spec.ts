import { TestBed } from '@angular/core/testing';

import { CountCardServiceService } from './count-card-service.service';

describe('CountCardServiceService', () => {
  let service: CountCardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountCardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
