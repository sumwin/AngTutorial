import { Component } from "@angular/core";
import { CoursesServices } from "./courses.service";

@Component({
  selector: "courses",
  template: `
    <h2>{{ title }}</h2>
    <ul>
        <li *ngFor="let course of courses">
            {{ course }}
        </li>
    </ul>
  `
})
export class CoursesComponent {
  title = "List of courses";
  courses;

  constructor(service: CoursesServices) {
    this.courses = service.getCourses();
  }

  //Logic for caling an HTTP service
}
