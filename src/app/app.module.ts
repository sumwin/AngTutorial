import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoursesComponent } from "./courses.component";
import { CourseComponent } from "./course/course.component";
import { CoursesServices } from "./courses.service";

@NgModule({
  declarations: [AppComponent, CourseComponent, CoursesComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [CoursesServices],
  bootstrap: [AppComponent]
})
export class AppModule {}
