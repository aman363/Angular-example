import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {
  addUserForm: FormGroup;

  constructor(private fb: FormBuilder,private userService:UserService) {
    this.addUserForm = this.fb.group({
      id: [''],
      firstName: [''],
      lastName: [''],
      dob: [''],
      email: [''],
      mobile: [''],
      role: [''],
      houseNo: [''],
      street: [''],
      area: [''],
      state: [''],
      country: [''],
      pincode: ['']
    });
  }

  onSubmit(frmValue: any): void {
    console.log('You submitted value: ', frmValue);
    console.log('ID: ', frmValue.id);
    console.log('First Name: ', frmValue.firstName);
    console.log('Last Name: ', frmValue.lastName);
    console.log('Date of Birth: ', frmValue.dob);
    console.log('Email: ', frmValue.email);
    console.log('Mobile: ', frmValue.mobile);
    console.log('Role: ', frmValue.role);
    console.log('House No: ', frmValue.houseNo);
    console.log('Street: ', frmValue.street);
    console.log('Area: ', frmValue.area);
    console.log('State: ', frmValue.state);
    console.log('Country: ', frmValue.country);
    console.log('Pincode: ', frmValue.pincode);
    var tempUser = new User(
      frmValue.id,
      frmValue.firstName,
      frmValue.lastName,
      frmValue.dob,
      frmValue.email,
      frmValue.mobile,
      frmValue.role,
      frmValue.houseNo,
      frmValue.street,
      frmValue.area,
      frmValue.state,
      frmValue.country,
      frmValue.pincode
    );
    console.log('New User Object: ', tempUser);
    this.userService.addUser(tempUser)

  }
}
