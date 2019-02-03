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

  ngOnInit() {
  }

  onLogin(data) {
    if (data.valid) {
      console.log(data.value);
      this.userService
        .validateEmail(data.value)
        .subscribe(res => {
          console.log(res)
          if (res && res.message) {
            this.userService
              .signin(data.value)
              .subscribe(res => {
                localStorage.setItem('token', res.token)
                localStorage.setItem('status', res.isInstructor)
                this.router.navigate(['/dashboard'])
              },
              err => {
                console.log(err)
                 alert("Invalid credentials");
              })
          } else {
            alert('Invalid Email')
          }
        },
        err => {
          console.log(err)
          // alert("Invalid credentials");
        })
    }

  }
}
