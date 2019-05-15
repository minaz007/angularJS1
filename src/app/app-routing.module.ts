import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from  './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { SurveyComponent } from './component/survey/survey.component';
import { HolidayComponent } from './component/holiday/holiday.component';
import { FeedbackComponent } from './Component/feedback/feedback.component';
import { MediagalleryComponent } from './Component/mediagallery/mediagallery.component';
import { AwardsandrecognitionComponent } from './Component/awardsandrecognition/awardsandrecognition.component';
import { ProductinformationComponent } from './Component/productinformation/productinformation.component';
import { PolicyComponent } from './Component/policy/policy.component';
import { EmployeeprofileComponent } from './component/employeeprofile/employeeprofile.component';
import { JobpostinguserComponent } from './component/jobpostinguser/jobpostinguser.component';
import { JobpostingadminComponent } from './component/jobpostingadmin/jobpostingadmin.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
   {
    path: 'home', component: HomeComponent, canActivate:[AuthGuard],pathMatch: 'full'   
   },
  {
    path: '', 
    redirectTo: '/login',
    pathMatch: 'full' 
  },
  
  {
    path: 'home',component: HomeComponent, children:[

    
    
         {  path: 'holiday' ,component:HolidayComponent },      
         {  path: 'survey',  component:SurveyComponent      },
         {  path: 'feedback',  component: FeedbackComponent      },
         {  path:'mediagallery', component:MediagalleryComponent, outlet:'mediagalleryout'   },
         {  path: 'awardsandrecognition',  component: AwardsandrecognitionComponent      },
         {  path: 'productinformation',  component: ProductinformationComponent      },
         {  path: 'policy',    component: PolicyComponent      },
         {  path: 'employeeprofile',     component:  EmployeeprofileComponent      },
         {  path: 'jobpostinguser',      component:  JobpostinguserComponent      },
         {  path: 'jobpostingadmin',      component:  JobpostingadminComponent   }
        
    ]
  },

{ path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
