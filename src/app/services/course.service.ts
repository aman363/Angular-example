import { Injectable } from '@angular/core';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  arrCourses: Course[] = [];

  constructor() {
    this.arrCourses = [
      new Course(1, 'Introduction to Angular', 'A comprehensive course on Angular framework.'),
      new Course(2, 'Advanced TypeScript', 'Deep dive into TypeScript and its advanced features.')
    ];
  }

  getCourses() {
    return this.arrCourses;
  }

  getCourseById(id: number): Course {
    for (var i = 0; i < this.arrCourses.length; i++) {
      if (id == this.arrCourses[i].id) {
        return this.arrCourses[i];
      }
    }
    return new Course(0, '', '');
  }

  addCourse(c: Course) {
    this.arrCourses.push(c);
    console.log(this.arrCourses);
  }
}
