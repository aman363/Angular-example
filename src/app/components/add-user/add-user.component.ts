import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Address } from '../../models/address';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {
  addUserForm: FormGroup;
  get f(){
    return this.addUserForm.controls
  }

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.addUserForm = this.fb.group({
      id: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      mobile: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]{10}$')])],
      role: ['', Validators.required],
      address: this.fb.group({
        houseNo: ['', Validators.required],
        street: ['', Validators.required],
        area: ['', Validators.required],
        state: ['', Validators.required],
        country: ['', Validators.required],
        pincode: ['', Validators.compose([Validators.required])]
      })
    });

  }

  onSubmit(frmValue: any): void {
    if(!this.addUserForm.valid){
      console.log("not valid")
      return
    }


    console.log('You submitted value: ', frmValue);
    console.log('ID: ', frmValue.id);
    console.log('First Name: ', frmValue.firstName);
    console.log('Last Name: ', frmValue.lastName);
    console.log('Date of Birth: ', frmValue.dob);
    console.log('Email: ', frmValue.email);
    console.log('Mobile: ', frmValue.mobile);
    console.log('Role: ', frmValue.role);
    console.log('House No: ', frmValue.address.houseNo);
    console.log('Street: ', frmValue.address.street);
    console.log('Area: ', frmValue.address.area);
    console.log('State: ', frmValue.address.state);
    console.log('Country: ', frmValue.address.country);
    console.log('Pincode: ', frmValue.address.pincode);

    const address = new Address(
      frmValue.address.houseNo,
      frmValue.address.street,
      frmValue.address.area,
      frmValue.address.state,
      frmValue.address.country,
      frmValue.address.pincode
    );

    const tempUser = new User(
      frmValue.id,
      frmValue.firstName,
      frmValue.lastName,
      new Date(frmValue.dob),
      frmValue.email,
      frmValue.mobile,
      frmValue.role,
      frmValue.address
    );

    console.log('New User Object: ', tempUser);
    this.userService.addUser(tempUser);
  }
}
