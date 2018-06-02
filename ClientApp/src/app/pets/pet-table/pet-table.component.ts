import { Component, OnInit } from '@angular/core';
import { BaseTableComponent } from '../../shared/base-table.component';
import { Pet } from '../shared/pet.model';
import { PetService } from '../shared/pet.service';

@Component({
  selector: 'app-pet-table',
  templateUrl: './pet-table.component.html',
  styleUrls: ['./pet-table.component.scss']
})
export class PetTableComponent extends BaseTableComponent<Pet,PetService> {

  constructor(
    service:PetService
  ) {
    super(service);
    this.displayedColumns = ["PetName", "BreedName","Age"];
  }
}
