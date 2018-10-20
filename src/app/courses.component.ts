import { Component } from "@angular/core";
// import { CoursesServices } from "./courses.service";

@Component({
  selector: "courses",
  template: `
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>  
  `
})
export class CoursesComponent {
  email = "me@example.com";

  onKeyUp() {
    console.log(this.email);
  }
}
