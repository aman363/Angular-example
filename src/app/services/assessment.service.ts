import { Injectable } from '@angular/core';
import {Assessment} from '../models/assessment'

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {
  arrAssessments:Assessment[]=[]

  constructor() {
    this.arrAssessments=[
      new Assessment(1,"Angluar",100,"assets/Images/angular.png",true),
      new Assessment(2,"Node Js",100,"assets/Images/nodejs.png",true),
      new Assessment(3,"Python",100,"assets/Images/python.jpeg",true),
      new Assessment(4,"Angluar",100,"assets/Images/angular.png",true),
      new Assessment(5,"Node Js",100,"assets/Images/nodejs.png",false),
      new Assessment(6,"Python",100,"assets/Images/python.jpeg",false)
  ]
   }

   getAssessments(){
    return this.arrAssessments
   }

   getAssessmentById(id:number){
    for(var i=0;i<this.arrAssessments.length;i++){
      if(id==this.arrAssessments[i].id){
        return this.arrAssessments[i]
      }
    }
    return new Assessment(0,'',0,'',true)
   }
}
