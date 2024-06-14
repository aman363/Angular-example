import { Injectable } from '@angular/core';
import {Assessment} from '../models/assessment'

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {
  arrAssessments:Assessment[]=[]

  constructor() {
    this.arrAssessments=[
  
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
    return new Assessment(0,'',new Date(),'',[],0)
   }
}
