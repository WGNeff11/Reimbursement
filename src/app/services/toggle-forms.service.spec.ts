import { TestBed } from '@angular/core/testing';

import { ToggleFormsService } from './toggle-forms.service';

describe('ToggleFormsService', () => {
  let service: ToggleFormsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToggleFormsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
