import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CodewordsetService } from 'src/app/services/codewordset.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  errFlag = false;
  adduser = '';
  files: '';
  // codeWordSetCount: [],
  // codeWordTempSetData: [],
  // codeWordSetData: [],
  // count: 0

  constructor(private codewordsetService: CodewordsetService, public dialogRef: MatDialogRef<AddUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    public snackBar: MatSnackBar) {
    this.adduser = { ...data };
  }


  ngOnInit() {
  }

  // Getting the data from uploaded xls file
  // previewFiles () {
  //   this.files = this.myFile
  //   let data = new FormData(document.querySelector('form'))
  //   axios.post('http://localhost:3000/codeword/getdataxlsx', data).then(response => {
  //     console.log(response.data.data)
  //     this.tcodeWordSetData = response.data.data
  //     this.count = response.data.data.length
  //   })
  // },

  save(data) {
    if (data.valid) {
      console.log(data.value);
      
      this.snackBar.openFromComponent(AddUserSnackBarComponent, {
        duration: 750,
      });
      this.dialogRef.close(data.value);
    } else {
      this.errFlag = true;
      data.reset
    }

  }

  rowClicked(row: any): void {
    console.log(row);
    this.dialogRef.close()
  }

}

@Component({
  selector: 'snack-bar-component-add-user',
  templateUrl: 'add-user-snack-bar.html',
  styles: [`
    .example-pizza-party {
      color: white;
    }
  `],
})
export class AddUserSnackBarComponent { }
