import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private httpClient: HttpClient) {}

  findAll(): Course[] {
    return [
      { _id: '1', name: 'SpringBoot', category: 'Back-end' },
      { _id: '2', name: 'Angular', category: 'Front-end' },
    ];
  }
}
