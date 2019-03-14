import { Component, OnInit } from '@angular/core';
import { AddCourseComponent } from 'src/app/add-course/add-course.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';

import { DashboardService } from 'src/app/services/dashboard.service';
import { MatTableDataSource } from '@angular/material/table';



// export interface PeriodicElement {
//   courseName: '',
//   startDate: '',
//   endDate: '',
//   startSurveyurldata: '',
//   endSurveyurldata: '',
//   CodeWordSetName: '',
//   file: '',
//   codeWordSetData: '',
//   coursesData: '',
//   selectedCourse: '',
//   codeWordSetCount: ''
// }


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // data: string[] = ['name', 'count', 'btn'];

  // elements: Element[];

  //  dataSource = new MatTableDataSource;

  // elements = [
  //   { heading: "Heading 1", content:"2019-02-10", content2:"2019-02-10", content3:"Start URL", content4:"End URL"},
  //   { heading: "Heading 1", content:"2019-02-10", content2:"2019-02-10", content3:"Start URL", content4:"End URL"},
  //   { heading: "Heading 1", content:"2019-02-10", content2:"2019-02-10", content3:"Start URL", content4:"End URL"},
  //   { heading: "Heading 1", content:"2019-02-10", content2:"2019-02-10", content3:"Start URL", content4:"End URL"},
  //   { heading: "Heading 1", content:"2019-02-10", content2:"2019-02-10", content3:"Start URL", content4:"End URL"},
  //   { heading: "Heading 1", content:"2019-02-10", content2:"2019-02-10", content3:"Start URL", content4:"End URL"},
  //   { heading: "Heading 1", content:"2019-02-10", content2:"2019-02-10", content3:"Start URL", content4:"End URL"},
    
  //   // { heading: "Heading 2", content:"Second sem"},
  //   // { heading: "Heading 3", content:"Third sem"},
  //   // { heading: "Heading 4", content:"Forth sem"},
  //   // { heading: "Heading 5", content:"Fifth sem"},
  //   // { heading: "Heading 6", content:"Sixth sem"},
  //  ]

  courseData: any;
  

  constructor(public dialog: MatDialog, private router: Router, private dashboardService: DashboardService) { }

  

  ngOnInit() {

    this.fetchCourse();
    
  }

  fetchCourse() {
        this.dashboardService.getCodewordsList()
        .subscribe((response : any) => {
          this.courseData = response.data;
            console.log(this.courseData)
            })
       }
  

  openDialog(): void {
    const dialogRef = this.dialog.open(AddCourseComponent, {
      width: '500px',
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      // this.dashboardService.addNewCourse(result)
      //   .subscribe((data) => {
      //     console.log(data);
      //     console.log('success');
          this.fetchCourse();
        },
        error => {
          console.log('Error Occured');
        }    
      )
  }

  rowClicked(row: any): void {
    console.log(row.courseNameKey);
    this.router.navigate(['/course', row.courseNameKey])
  }  

}
