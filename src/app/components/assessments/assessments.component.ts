import { Component } from '@angular/core';
import { Assessment } from '../../models/assessment';

@Component({
  selector: 'app-assessments',
  templateUrl: './assessments.component.html',
  styleUrl: './assessments.component.scss'
})
export class AssessmentsComponent {
  arrAssessments=[
    new Assessment(1,"Angluar",100,"assets/Images/angular.png"),
    new Assessment(2,"Node Js",100,"assets/Images/nodejs.png"),
    new Assessment(3,"Python",100,"assets/Images/python.jpeg"),
    new Assessment(4,"Angluar",100,"assets/Images/angular.png"),
    new Assessment(5,"Node Js",100,"assets/Images/nodejs.png"),
    new Assessment(6,"Python",100,"assets/Images/python.jpeg")
]
}
