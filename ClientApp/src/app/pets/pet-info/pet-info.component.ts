import { Component, OnInit } from '@angular/core';
import { BaseInfoComponent } from '../../shared/base-info-component';
import { Pet } from '../shared/pet.model';
import { PetService } from '../shared/pet.service';
import { PetCommuncateService } from '../shared/pet-communcate.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-pet-info',
  templateUrl: './pet-info.component.html',
  styleUrls: ['./pet-info.component.scss']
})
export class PetInfoComponent extends BaseInfoComponent<Pet,PetService,PetCommuncateService> {
  constructor(
    service: PetService,
    serviceCommuncate: PetCommuncateService,
    private fb:FormBuilder
  ) {
    super(service, serviceCommuncate);
  }
  // Parameter


  // on GetData
  onGetDataByKey(infoValue?: Pet): void {
    if (infoValue) {
      if (infoValue.CustomerId) {
        this.service.getOneKeyNumber(infoValue)
          .subscribe(dbData => {
            this.InfoValue = dbData;
          }, error => console.error(error), () => this.buildForm());
      }
    } else {
      this.InfoValue = {
        PetId: 0,
      };
      this.buildForm();
    }
  }
  // build form
  buildForm(): void {
    // Form
    this.InfoValueForm = this.fb.group({
      PetId: [this.InfoValue.PetId],
      PetName: [this.InfoValue.PetName,
        [
          Validators.required,
          Validators.maxLength(200)
        ]
      ],
      Image: [this.InfoValue.Image],
      Sex: [this.InfoValue.Sex],
      BrithDate: [this.InfoValue.BrithDate,
        [
          Validators.required
        ]
      ],
      RegisterDate: [this.InfoValue.RegisterDate],
      CustomerId: [this.InfoValue.CustomerId,
        [
          Validators.required
        ]
      ],
      BreedId: [this.InfoValue.BreedId,
        [
          Validators.required
        ]
      ],
      Remark: [this.InfoValue.Remark,
        [
          Validators.maxLength(200)
        ]
      ],
      CreateDate: [this.InfoValue.CreateDate],
      ModifyDate: [this.InfoValue.ModifyDate],
    });
    this.InfoValueForm.valueChanges.subscribe((data: any) => this.onValueChanged(data));
  }


}
