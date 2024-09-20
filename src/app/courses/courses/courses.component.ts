import { Component } from '@angular/core';

import { Course } from '../model/course';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent {
  courses: Course[] = [];
  displayedColumns: string[] = ['name', 'category'];

  constructor(private courseService: CourseService) {
    this.courses = this.courseService.findAll();
  }
}
