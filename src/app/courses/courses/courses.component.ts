import { Component } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent {
  displayedColumns: string[] = ['name', 'category'];
  courses: Course[] = [
    { _id: '1', name: 'SpringBoot', category: 'Back-end' },
    { _id: '2', name: 'Angular', category: 'Front-end' },
  ];
}
