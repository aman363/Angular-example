export class User {
    id: number
    firstName: string
    lastName: string
    dob: Date
    email: string
    mobile: string
    role: string
    houseNo: string
    street: string
    area: string
    state: string
    country: string
    pincode: string
  
    constructor(
      id: number,
      firstName: string,
      lastName: string,
      dob: Date,
      email: string,
      mobile: string,
      role: string,
      houseNo: string,
      street: string,
      area: string,
      state: string,
      country: string,
      pincode: string
    ) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.dob = dob;
      this.email = email;
      this.mobile = mobile;
      this.role = role;
      this.houseNo = houseNo;
      this.street = street;
      this.area = area;
      this.state = state;
      this.country = country;
      this.pincode = pincode;
    }
  }
  