import { Component, OnInit } from '@angular/core';
import { AddCourseComponent } from 'src/app/add-course/add-course.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  elements = [
    { heading: "Heading 1", content:"First sem"},
    { heading: "Heading 2", content:"Second sem"},
    { heading: "Heading 3", content:"Third sem"},
    { heading: "Heading 4", content:"Forth sem"},
    { heading: "Heading 5", content:"Fifth sem"},
    { heading: "Heading 6", content:"Sixth sem"},
  ]
  

  constructor(public dialog: MatDialog, private router: Router) { }

  

  ngOnInit() {

    
    
  }

  

  openDialog(): void {
    const dialogRef = this.dialog.open(AddCourseComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      });
  }

  rowClicked(row: any): void {
    console.log(row);
    this.router.navigate(['/course'])
  }

  

}
