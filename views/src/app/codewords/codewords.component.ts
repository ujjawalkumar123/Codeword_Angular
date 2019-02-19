import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// import { AddUserComponent } from 'src/app/add-user/add-user.component';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CodewordsetService } from 'src/app/services/codewordset.service';

export interface PeriodicElement {
  codeWords: string;
 }

//  const ELEMENT_DATA: PeriodicElement[] = []

@Component({
  selector: 'app-codewords',
  templateUrl: './codewords.component.html',
  styleUrls: ['./codewords.component.css']
})
export class CodewordsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'btn1', 'btn2'];
  dataSource = new MatTableDataSource;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialog: MatDialog, 
    private router: Router,
    private route: ActivatedRoute,
    private codewordsetService: CodewordsetService) {           

      let id = this.route.snapshot.paramMap.get('id');
      // console.log(id);
      this.codewordsetService.getCodewords([{ CodeWordSetName: id }])
      .subscribe((response : any) => {
         console.log(response);
        //  this.displayedColumns = response;
         this.dataSource = new MatTableDataSource(response.data[id]);
        })
     
    }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  rowClicked(row: any): void {
    console.log(row);
    this.router.navigate(['/codewordset'])
  }


}
