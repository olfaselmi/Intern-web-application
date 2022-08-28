import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { invitation } from 'src/app/Model/invitation';
import { DataService } from 'src/services/data.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-update-invitation',
  templateUrl: './update-invitation.component.html',
  styleUrls: ['./update-invitation.component.css']
})
export class UpdateInvitationComponent implements OnInit {

  id:number
  Invitation: invitation = new invitation();
  
    constructor(private invitationservice:DataService
      ,private route:ActivatedRoute , private router:Router) { }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    ngOnInit(): void {
      this.id=this.route.snapshot.params['id']
  //this.id=6
  this.invitationservice.getInvitationbyid(this.id).subscribe(data=>{
    this.Invitation=data
  
  },error=>console.log(error));
  
  
    }
  
    onSubmit(){
      console.log(this.Invitation)
      this.invitationservice.updateInvitation(this.Invitation.idInvitation,this.Invitation).subscribe( data =>{console.log(data)
        this.goToInvitationList()
        Swal.fire({
          position: "center",
          icon: "success",
          title: "update succefully",
          showConfirmButton: false,
          timer: 1500,
        })
      }
      , error => console.log(error));
      Swal.fire({
        position: "center",
        icon: "error",
        title: "error",
        showConfirmButton: false,
        timer: 1500,
      })
    }
    goToInvitationList(){
      this.router.navigate(['/invitation']);
    }
  
  
  
  }
  