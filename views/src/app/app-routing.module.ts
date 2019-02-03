import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { LoginComponent } from 'src/app/login/login.component';
import { UserComponent } from 'src/app/user/user.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { CodewordsetComponent } from './codewordset/codewordset.component';
import { CodewordsComponent } from './codewords/codewords.component';
import { CourseComponent } from './course/course.component';

const routes: Routes = [
  // { path: 'start', component: AppComponent },
  { path: 'login' , component: LoginComponent },
  { path: 'user' , component: UserComponent },
  { path: 'codewords' , component: CodewordsComponent },
  { path: 'codewordset' , component: CodewordsetComponent },
  { path: 'dashboard' , component: DashboardComponent },
  { path: 'course' , component: CourseComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
