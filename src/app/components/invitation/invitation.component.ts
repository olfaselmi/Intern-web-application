import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { invitation } from 'src/app/Model/invitation';
import { DataService } from 'src/services/data.service';
import Swal from "sweetalert2"

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.css']
})
export class InvitationComponent implements OnInit {

  invitationData: any = []
  invitation = new invitation
  data: any;

  activeindex = -1;

  Email = 'Submit';

  listInvitation: invitation[]
  showAdd = false;


  constructor(private invitattionser: DataService, private router: Router) {


    this.invitattionser.getAllinvitation().subscribe((allData) => {
      console.log(allData)
      this.invitationData = allData
    })
  }

  listinv() {
    this.invitattionser.getAllinvitation().subscribe((allData) => {
      console.log(allData)
      this.invitationData = allData
    })
  }
  deleteInvitation(id: any) {
    
    this.invitattionser.deleteInvitation(id).subscribe((result) => {
      console.log(result)
      // this.invitattionser.splice(i,1)
      this.invitationData.splice(id)
      this.invitattionser.getAllinvitation().subscribe((allData) => {
        console.log(allData)
        this.invitationData = allData
      })
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Deleted succefully",
        showConfirmButton: false,
        timer: 1500,
      })
      //this.ngOnInit()
    }, err => {
      console.error(err)
      Swal.fire({
        position: "center",
        icon: "error",
        title: "error has been occured",
        showConfirmButton: false,
        timer: 1500,
      })
    })
  }

  updateInvitation(id: number) {
    this.router.navigate(['update-invitation', id]);
   
  }


  ngOnInit(): void {



  }
  showForm() {
    this.showAdd = true;
  }
  addInvitation(i: invitation) {
    this.listInvitation.push(i);
    console.log(i);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "add succefully",
      showConfirmButton: false,
      timer: 1500,
    })
  }






  AcceptInvitation(id: any, i: number) {
    this.invitattionser.AcceptInvitation(id).subscribe((result) => {
      console.log(result)
      // this.invitattionser.splice(i,1)
      window.location.reload()

      //this.ngOnInit()
    })
  }



}