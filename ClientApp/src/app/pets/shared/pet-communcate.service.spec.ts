import { TestBed, inject } from '@angular/core/testing';

import { PetCommuncateService } from './pet-communcate.service';

describe('PetCommuncateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PetCommuncateService]
    });
  });

  it('should be created', inject([PetCommuncateService], (service: PetCommuncateService) => {
    expect(service).toBeTruthy();
  }));
});
