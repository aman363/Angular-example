import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent {
  addCourseForm: FormGroup;

  get f(){
    return this.addCourseForm.controls
  }

  constructor(private fb: FormBuilder, private courseService: CourseService) {
    this.addCourseForm = this.fb.group({
      id: ['', [Validators.required, Validators.min(1)]],
      cName: ['', [Validators.required, Validators.minLength(3)]],
      cDescription: ['', [Validators.required, Validators.maxLength(500)]]
    });
  }

  onSubmit(frmValue: any): void {
    console.log('You submitted value: ', frmValue);
    const tempCourse = new Course(
      frmValue.id,
      frmValue.cName,
      frmValue.cDescription
    );
    console.log('New Course Object: ', tempCourse);
    this.courseService.addCourse(tempCourse);
  }
}
