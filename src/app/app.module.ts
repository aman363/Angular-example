import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AssessmentsComponent } from './components/assessments/assessments.component';
import { AdminComponent } from './components/admin/admin.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { BannerComponent } from './components/banner/banner.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCourseComponent } from './components/add-course/add-course.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    AssessmentsComponent,
    AdminComponent,
    ContactUsComponent,
    BannerComponent,
    AddUserComponent,
    AddCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
