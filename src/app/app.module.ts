import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import { HeaderComponent } from './Component/header/header.component';
import { FooterComponent } from './Component/footer/footer.component';
import {HomeComponent} from './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SurveyComponent } from './component/survey/survey.component';
import { HolidayComponent } from './component/holiday/holiday.component';
import { FeedbackComponent } from './Component/feedback/feedback.component'; 
import { MediagalleryComponent } from './Component/mediagallery/mediagallery.component';
import { AwardsandrecognitionComponent } from './Component/awardsandrecognition/awardsandrecognition.component';
import { ProductinformationComponent } from './Component/productinformation/productinformation.component'
import { PolicyComponent } from './Component/policy/policy.component';
import { EmployeeprofileComponent } from './component/employeeprofile/employeeprofile.component';
import { JobpostingadminComponent } from './component/jobpostingadmin/jobpostingadmin.component';
import { JobpostinguserComponent } from './component/jobpostinguser/jobpostinguser.component';
import { HttpClientModule ,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './guards/auth.guard';
import { AuthenticationService } from 'src/app/services/authentication.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SurveyComponent,
    HolidayComponent,
    
    FeedbackComponent,
    MediagalleryComponent,
    AwardsandrecognitionComponent,
    ProductinformationComponent,
    PolicyComponent,
    EmployeeprofileComponent,
    JobpostingadminComponent,
    JobpostinguserComponent  

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    AlertModule.forRoot(),
  ],
  providers: [ AuthenticationService,AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
