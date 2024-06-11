import { Component } from '@angular/core';
import { Assessment } from '../../models/assessment';

@Component({
  selector: 'app-assessments',
  templateUrl: './assessments.component.html',
  styleUrl: './assessments.component.scss'
})
export class AssessmentsComponent {
  arrAssessments=[
    new Assessment(1,"Angluar",100,"assets/Images/angular.png",true),
    new Assessment(2,"Node Js",100,"assets/Images/nodejs.png",true),
    new Assessment(3,"Python",100,"assets/Images/python.jpeg",true),
    new Assessment(4,"Angluar",100,"assets/Images/angular.png",true),
    new Assessment(5,"Node Js",100,"assets/Images/nodejs.png",false),
    new Assessment(6,"Python",100,"assets/Images/python.jpeg",false)
]

// choice:number=0;
// constructor(){
//   this.choice=1
// }

// nextChoice():void{
//   this.choice+=1;
//   if(this.choice>5){
//     this.choice=1;
//   }
// }

isBordered:boolean=true;

classesObj={
  bordered: false
}

constructor(){
  this.isBordered=true;
  this.toggleBorder;
}

toggleBorder():void{
  this.isBordered=!this.isBordered;
  this.classesObj={
    bordered:this.isBordered
  };
}
}
