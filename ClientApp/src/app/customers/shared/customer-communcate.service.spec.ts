import { TestBed, inject } from '@angular/core/testing';

import { CustomerCommuncateService } from './customer-communcate.service';

describe('CustomerCommuncateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerCommuncateService]
    });
  });

  it('should be created', inject([CustomerCommuncateService], (service: CustomerCommuncateService) => {
    expect(service).toBeTruthy();
  }));
});
