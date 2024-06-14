import { Address } from "./address";


export class User {
  id: number;
  firstName: string;
  lastName: string;
  dob: Date;
  email: string;
  mobile: string;
  role: string;
  address: Address 

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    dob: Date,
    email: string,
    mobile: string,
    role: string,
    address: Address 
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
    this.email = email;
    this.mobile = mobile;
    this.role = role;
    this.address = address; 
  }
}
