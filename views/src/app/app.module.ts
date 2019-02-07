import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent, AddUserSnackBarComponent, HintDialog } from './add-user/add-user.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CodewordsetComponent } from './codewordset/codewordset.component';
import { CodewordsComponent } from './codewords/codewords.component';
import { AddCourseComponent, AddCourseSnackBarComponent } from './add-course/add-course.component';
import { CourseComponent } from './course/course.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
// import { RegisterComponent } from './register/register.component';
// import { PasswordComponent } from './password/password.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    AddUserComponent,
    NavBarComponent,
    AddUserSnackBarComponent,
    HintDialog,
    DashboardComponent,
    CodewordsetComponent,
    CodewordsComponent,
    AddCourseComponent,
    AddCourseSnackBarComponent,
    CourseComponent,
    RegisterComponent
    // RegisterComponent,
    // PasswordComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatGridListModule,
    HttpClientModule 
  ],
  providers: [],
  entryComponents: [
    AddUserComponent,
    AddUserSnackBarComponent,
    HintDialog,
    AddCourseComponent,
    AddCourseSnackBarComponent
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
