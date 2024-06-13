import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  arrUsers:User[]=[]

  constructor() { 
    this,this.arrUsers=[
      new User(
        1,'John','Doe',new Date(1990, 5, 15), 'john.doe@example.com','9876543210','user','123','Main Street','Downtown','California','USA','12345' ),
      new User(2,'Jane','Smith',new Date(1988, 9, 25), 'jane.smith@example.com','9876543211','admin','456','Broadway','Midtown','New York','USA', '10001')
    ]
  }

  getUsers(){
    return this.arrUsers
  }

  getUserById(id:number){
    for(var i=0;i<this.arrUsers.length;i++){
      if(id==this.arrUsers[i].id){
        return this.arrUsers[i]
      }
    }
    return new User(0,"","",new Date(1990, 5, 15),"","","","","","","","","")
  }

  addUser(u:User){
    this.arrUsers.push(u)
    console.log(this.arrUsers)
  }
}
