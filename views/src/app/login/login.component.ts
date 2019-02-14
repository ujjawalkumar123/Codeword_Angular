import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errFlag = false;
  constructor(private router: Router, private userService: UserService) { }

  // now
  msg: String;
  signed: false;
  emailid: String;
  pass: String;



  // then

  ngOnInit() {
  }

  // onLogin(data) {
  //   let d = new FormData(document.querySelector('form'))
  //   this.emailid = data.get('emailID').toLowerCase()
  //   this.pass = data.get('password')
  //   this.msg = ''
  //   if (!data.valid) {
  //     // console.log(data.value);
  //     this.msg = 'Login Invalid'
  //     this.signed = false}
  //     else{
  //     this.userService
  //       .validateEmail(data.value)
  //       .subscribe((res : any) => {
  //         console.log(res)
  //         if (res.data.message) {
  //           // this.msg = ''
  //           // let data = new FormData(document.querySelector('form'))
  //           this.userService
  //             .signin(data.value)
  //             .subscribe((res : any) => {
  //               localStorage.setItem('token', res.token)
  //               localStorage.setItem('status', res.isInstructor)
  //               this.router.navigate(['/dashboard'])
  //             },
  //             // err => {
  //             //   console.log(err)
  //             //    alert("Invalid credentials");
  //             // }
  //           )
  //         } else {
  //           // alert('Invalid Email')
  //           this.errFlag = true;
  //           data.resetForm();
  //         }
  //       },
  //       // err => {
  //       //   console.log(err)
  //       //   // alert("Invalid credentials");
  //       // }
  //     )
  //   }

  // }

  onLogin(data) {
    if (data.valid) {
      console.log(data.value);
      this.userService
        .validateEmail(data.value)
        .subscribe((res : any) => {
          console.log(res)
          if (res && res.message) {
            this.userService
              .signin(data.value)
              .subscribe((res : any) => {
                localStorage.setItem('token', res.token)
                localStorage.setItem('status', res.isInstructor)
                this.router.navigate(['/dashboard'])
              },
              // err => {
              //   console.log(err)
              //    alert("Invalid credentials");
              // }
            )
          } else {
            // alert('Invalid Email')
            this.errFlag = true;
            data.resetForm();
          }
        },
        // err => {
        //   console.log(err)
        //   // alert("Invalid credentials");
        // }
      )
    }

  }
}
