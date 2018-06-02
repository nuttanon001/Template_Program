import { BaseModel } from "../../shared/base-model.model";
import { CustomerSex } from "../../customers/shared/customer-sex.enum";

export interface Pet extends BaseModel {
  PetId: number;
  PetName?: string;
  Image?: string;
  Sex?: CustomerSex;
  Remark?: string;
  BrithDate?: Date;
  RegisterDate?: Date;
  // Relation
  CustomerId?: number;
  BreedId?: number;
  //ViewModel
  Age?: string;
  BreedName?: string;
}
