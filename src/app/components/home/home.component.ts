import { Component } from '@angular/core';
import { Assessment } from '../../models/assessment';
import { User } from '../../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent{
    // arrAssessmentNames=["ROR 12","Angular 17","Python"]
    arrAssessments=[
        new Assessment(1,"Angluar",100,"assets/Images/angular.png",true),
        new Assessment(2,"Node Js",100,"assets/Images/nodejs.png",true),
        new Assessment(3,"Python",100,"assets/Images/python.jpeg",true)
    ]
    arrUsers=[
        new User(1,"Jack","S"),
        new User(2,"Mike","K"),
        new User(3,"Jacob","M")
    ]

    displayDetails(aName:string,aMarks:number){
        console.log("details Requested..")
        console.log(aName+","+aMarks)
    }
}