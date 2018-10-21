import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoursesComponent } from "./courses.component";
import { CourseComponent } from "./course/course.component";
import { CoursesServices } from "./courses.service";
import { AuthorsComponent } from "./authors/authors.component";
import { AuthorsService } from "./authors.service";
import { SummaryPipe } from "./summary.pipe";
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCasePipe } from './title-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    AuthorsComponent,
    SummaryPipe,
    FavoriteComponent,
    TitleCasePipe
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [CoursesServices, AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
