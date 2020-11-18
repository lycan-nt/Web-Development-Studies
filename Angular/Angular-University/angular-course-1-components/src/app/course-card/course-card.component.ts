import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {COURSES} from '../../db-data';
import { Course } from '../model/course'


@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output()
  courseSelected = new EventEmitter<Course>();

  constructor() { }

  ngOnInit(): void {
  }

  onCourseViewed() {
    console.log('Button clicked...')

    this.courseSelected.emit(this.course);
  }

  isImageVisible() {
    return this.course && this.course.iconUrl
  }

  cardClass() {
    if (this.course.category == 'BEGINNER') 
    {
      return 'beginner';
    }

  }

  cardStyle() {
    return {'text-decoration':'underline'}
    
  }

}