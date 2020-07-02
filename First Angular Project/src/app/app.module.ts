import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { SpecialComponent } from './special/special.component';
import { CoursesService } from './courses.service';
import { LinksCourses } from './special/links.component';
import { FormsModule } from '@angular/forms';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ResponseComponent } from './response/response.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FeedbackFormService } from './feedback-form.service';



@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SpecialComponent, LinksCourses, FeedbackFormComponent, NavbarComponent, HomeComponent, ResponseComponent, NotFoundComponent//register the component   
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot([
      {path:'', component: HomeComponent},
      {path:'response', component: ResponseComponent},
      {path:'feedback', component: FeedbackFormComponent},
      {path:'**', component: NotFoundComponent}
    ])
  ],
  providers: [
    CoursesService,FeedbackFormService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
