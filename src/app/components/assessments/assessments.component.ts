import { Component } from '@angular/core';
import { Assessment } from '../../models/assessment';
import { AssessmentService } from '../../services/assessment.service';

@Component({
  selector: 'app-assessments',
  templateUrl: './assessments.component.html',
  styleUrl: './assessments.component.scss'
})
export class AssessmentsComponent {
   arrAssessments:Assessment[]=[]
   assessment:Assessment= new Assessment(0,'',new Date(),'',[],0)

 constructor(private assessmentService:AssessmentService){
  this.arrAssessments=this.assessmentService.getAssessments()
 }

 displayDetails(aid:number){
  console.log("details Requested..")
  console.log(aid)
  this.assessment=this.assessmentService.getAssessmentById(aid)
  console.log(this.assessment)
}

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

// isBordered:boolean=true;

// classesObj={
//   bordered: false
// }

// constructor(){
//   this.isBordered=true;
//   this.toggleBorder;
// }

// toggleBorder():void{
//   this.isBordered=!this.isBordered;
//   this.classesObj={
//     bordered:this.isBordered
//   };
// }
}
