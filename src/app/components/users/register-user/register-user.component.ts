import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/user';
import { UserService } from 'src/services/user.service';
import swal from "sweetalert";

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  user: User;
  constructor(private userService : UserService,private router: Router) { }

  ngOnInit(): void {
    this.user =  new User();
  }

  verifyUser()
  {
    this.userService.verifyUser(this.user.email).subscribe(
      (data)=>console.log(data)
      
    )
  }


  save(){
   
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
            )
            swal({
              title: "Successfully registered",
              text: "You have been successfully registered to our application!",
              icon: "success",
              buttons: ["Stay on this page","Login"],
              dangerMode: true,
            })
              .then((willDelete) => {
                if (willDelete) {
                this.router.navigate(['/login'])
                }
              
              });
          }
        }
        
      )

      
    }
  }



