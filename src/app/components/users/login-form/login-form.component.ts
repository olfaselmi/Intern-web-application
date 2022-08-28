import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { User } from 'src/app/Model/user';
import { UserService } from 'src/services/user.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  user:User=new User();
  msg:string="";

  constructor(private router: Router,private activated:ActivatedRoute,private userService:UserService) { }

  ngOnInit(): void {
  }

  Authenticate(){
    this.userService.authenticate(this.user).subscribe(
      (data:User)=>{
        if (data!=null){
        this.user=data;
        localStorage.setItem('loggedUserid',String(this.user.id));
        localStorage.setItem('loggedName',this.user.name);
        localStorage.setItem('loggedUserEmail',this.user.email);
        localStorage.setItem('loggedUserRole',String(this.user.role));
        localStorage.setItem('isloggedIn','active');
        console.log(localStorage.getItem('loggedUserRole'));
        location.reload();
        location.assign('/home');}
        else {
          this.msg="email or password doesn't exist please verify your input";
        }
      }
    )
  }
}