import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { BaseMasterComponent } from '../../shared/base-master-component';
import { Pet } from '../shared/pet.model';
import { PetService } from '../shared/pet.service';
import { PetCommuncateService } from '../shared/pet-communcate.service';
import { PetTableComponent } from '../pet-table/pet-table.component';
import { DialogsService } from '../../dialogs/shared/dialogs.service';

@Component({
  selector: 'app-pet-master',
  templateUrl: './pet-master.component.html',
  styleUrls: ['./pet-master.component.scss']
})
export class PetMasterComponent extends BaseMasterComponent<Pet,PetService,PetCommuncateService> {
  constructor(
    service: PetService,
    serviceCommuncate: PetCommuncateService,
    serviceDialogs: DialogsService,
    viewContainerRef:ViewContainerRef
  ) {
    super(service, serviceCommuncate, serviceDialogs, viewContainerRef);
  }

}
