import { TestBed } from '@angular/core/testing';

import { EulerAnglesConverterService } from './euler-angles-converter-service';

describe('EulerAnglesConverterService', () => {
  let service: EulerAnglesConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EulerAnglesConverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
