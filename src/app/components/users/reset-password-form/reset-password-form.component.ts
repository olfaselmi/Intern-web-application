import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Model/user';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['./reset-password-form.component.css']
})
export class ResetPasswordFormComponent implements OnInit {
  OldPassword:string;
  NewPassword:string;
  modelUser:User=new User();
  msg:string="";
  verifPass:boolean=false;
  constructor(private userService: UserService,private router: Router,private activated:ActivatedRoute) { }

  ngOnInit(): void {
  }

  Reset(){
    this.modelUser.email=localStorage.getItem('loggedUserEmail');
    this.modelUser.password=this.OldPassword;
    this.userService.verifyPassword(this.modelUser).subscribe(
      (data:boolean)=>{
        this.verifPass=data;
        console.log(data)
        if (this.verifPass==true){
          console.log('aaaa');
          this.modelUser.password=this.NewPassword;
          this.userService.resetPassword(this.modelUser).subscribe(
            ()=>{
              
              location.reload();
              location.assign('/home');
            }
          )
        }else{
          this.msg="old password provided is wrong";
        }
      }
    )
  }

}
