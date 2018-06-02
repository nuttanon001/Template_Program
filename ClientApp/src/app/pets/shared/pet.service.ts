import { Injectable } from '@angular/core';
import { BaseRestService } from '../../shared/base-rest.service';
import { Pet } from './pet.model';
import { HttpClient } from '@angular/common/http';
import { HttpErrorHandler } from '../../shared/http-error-handler.service';

@Injectable()
export class PetService extends BaseRestService<Pet> {
  constructor(
    http: HttpClient,
    httpErrorHandler: HttpErrorHandler
  ) {
    super(
      http,
      "api/Pet/",
      "PetService",
      "PetId",
      httpErrorHandler
    );
  }

}
