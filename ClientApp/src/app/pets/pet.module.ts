import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetRoutingModule } from './pet-routing.module';
import { PetService } from './shared/pet.service';
import { PetCommuncateService } from './shared/pet-communcate.service';
import { PetCenterComponent } from './pet-center.component';
import { PetMasterComponent } from './pet-master/pet-master.component';
import { PetInfoComponent } from './pet-info/pet-info.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomMaterialModule } from '../shared/customer-material.module';
import { PetTableComponent } from './pet-table/pet-table.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    PetRoutingModule
  ],
  declarations: [
    PetCenterComponent,
    PetMasterComponent,
    PetInfoComponent,
    PetTableComponent],
  providers: [
    PetService,
    PetCommuncateService
  ]
})
export class PetModule { }
