import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipement } from 'src/app/Model/equipement';
import { DataService } from 'src/services/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editEquipement',
  templateUrl: './editequipement.component.html',
  styleUrls: ['./editequipement.component.css']
})
export class EditEquipementComponent implements OnInit {

 id:number
 //Equipement: Equipement ;
 Equipement: Equipement = new Equipement();
constructor(private Equipementservice:DataService
    ,private route:ActivatedRoute , private router: Router)


     { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']

this.Equipementservice.getEquipementbyid(this.id).subscribe(data=>{
  this.Equipement=data
},error=>console.log(error));
/* 
    ngOnInit(): void {
      this.id=this.route.snapshot.params['id']
  //this.id=6
  this.invitationservice.getInvitationbyid(this.id).subscribe(data=>{
    this.Invitation=data
  
  },error=>console.log(error));
  
  
    }
  */ 

  }
  onSubmit(){
    console.log(this.Equipement)
    this.Equipementservice.updateEquipement(this.Equipement).subscribe( data =>{console.log(data)
      this.goToEquipementList()
      Swal.fire({
        position: "center",
        icon: "success",
        title: "mise à jour réussie",
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
 /* onSubmit(){
    console.log(this.Equipement)
    this.Equipementservice.updateEquipement(this.id,this.Equipement).subscribe( data =>{console.log(data)
      this.goToEquipementList()

    }
    , error => console.log(error));
  }*/
  goToEquipementList(){
    this.router.navigate(['/Equipement']);
  }



}
