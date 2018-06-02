import { Injectable } from '@angular/core';
import { BaseCommunicateService } from '../../shared/base-communicate.service';
import { Pet } from './pet.model';

@Injectable()
export class PetCommuncateService extends BaseCommunicateService<Pet> {
  constructor() { super(); }
}
