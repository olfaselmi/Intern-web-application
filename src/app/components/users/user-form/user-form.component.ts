import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/user';
import { UserService } from 'src/services/user.service';
import swal from "sweetalert";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  users: User[];
  user: User;
  status:boolean=false;

  constructor(private userService : UserService,private router: Router) { }

  ngOnInit(): void {
    this.status=this.userService.status;
    if (this.userService.status){

      this.user =  this.userService.currentUser;
      console.log(this.user)
    }else {

      this.user =  new User();
    }
  }

  verifyUser()
  {
    this.userService.verifyUser(this.user.email).subscribe(
      (data)=>console.log(data)
      
    )
  }


  save(){
    if (this.status){
  
      this.userService.updateUserService(this.user).subscribe(
        ()=>this.router.navigate(['/users'])
      )
    }
    else {

      this.userService.verifyUser(this.user.email).subscribe(
        (data)=>{
          if(data)
          {
            swal({
              title: "This email already exists!",
              text: "Try with another email",
              icon: "warning",
              buttons: ["Okay"],
              dangerMode: true,
            })
          }
          else
          {
            this.userService.addUser(this.user).subscribe(
              ()=>this.router.navigate(['/users'])
            )
          }
        }
        
      )

      
    }
  }


  return(){
    this.router.navigate(['/users']);
  }

}
