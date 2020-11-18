import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  course = COURSES;

  startDate = new Date();  

  onCourseSelected(course: Course) {
    console.log("Card clicked", course);
  }
}