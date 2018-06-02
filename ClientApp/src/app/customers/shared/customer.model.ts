import { BaseModel } from "../../shared/base-model.model";
import { CustomerSex } from "./customer-sex.enum";

export interface Customer extends BaseModel {
  CustomerId: number;
  FirstName?: string ;
  LastName?: string ;
  Image?: string ;
  Sex?: CustomerSex;
  Address?: string ;
  Address2?: string ;
  Infomation?: string ;
  BirthDate ?: Date;
  RegisterDate ?: Date;
  PhoneNo?: string ;
  MailAddress?: string ;
  Remark?: string;
  //ViewModel
  Age?: string;
}
