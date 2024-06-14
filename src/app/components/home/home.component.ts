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
        
    ]
    

    displayDetails(aName:string,aMarks:number){
        console.log("details Requested..")
        console.log(aName+","+aMarks)
    }
}