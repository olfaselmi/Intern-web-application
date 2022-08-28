import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Equipement } from 'src/app/Model/equipement';
import { DataService } from 'src/services/data.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-Equipement',
  templateUrl: './Equipement.component.html',
  styleUrls: ['./Equipement.component.css']
})
export class EquipementComponent implements OnInit {

  EquipementData:any= []
  data: any;
  equipement : Equipement;
activeindex = -1;
listEquipement : Equipement[]= [];



showAdd = false;



  constructor(private Equipementser:DataService ,private router:Router)  { 
    
    this.Equipementser.getAllEquipement().subscribe((allData) => {
      console.log(allData)
      this.EquipementData = allData
    })
  }
  getEquipement()
  {
    this.Equipementser.getEquipement().subscribe((allData)=>
    {
      console.log('aaaaaa',allData);
      this.EquipementData=allData;
    })
  }
  listinv() {
    this.Equipementser.getAllEquipement().subscribe((allData) => {
      console.log(allData)
      this.EquipementData = allData
    })
  }
  deleteEquipement(id: any) {
    
    this.Equipementser.deleteEquipement(id).subscribe((result) => {
      console.log(result)
      // this.invitattionser.splice(i,1)
      this.EquipementData.splice(id)
      this.Equipementser.getEquipement().subscribe((allData) => {
        console.log(allData)
        this.EquipementData = allData
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

  updateEquipement(id: number) {
    this.router.navigate(['update-Equipement', id]);
   
  }


  ngOnInit(): void {



  }
  showForm() {
    this.showAdd = true;
  }
  addEquipement(i: Equipement) {
    this.listEquipement.push(i);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "add succefully",
      showConfirmButton: false,
      timer: 1500,
    })
  }






  AcceptInvitation(id: any, i: number) {
    this.Equipementser.AcceptInvitation(id).subscribe((result) => {
      console.log(result)
      // this.invitattionser.splice(i,1)
      window.location.reload()

      //this.ngOnInit()
    })
    
  }



}
    /*
  this.Equipementser.getAllEquipement().subscribe((allData)=>
  {
    console.log(allData)
    this.EquipementData=allData
  })
}

private aawja(){
  this.Equipementser.getAllEquipement().subscribe((allData)=>
  {
    console.log(allData)
    this.EquipementData=allData
  })
}
deleteEquipement(id:any,i:number){
    this.Equipementser.deleteEquipement(id).subscribe((res)=>
    {console.log(res)
     // this.invitattionser.splice(i,1)
      this.EquipementData.splice(i,1)  
  
  //this.ngOnInit()
    })

  }
 


  updateEquipement(id: number){
    this.router.navigate(['update-Equipement', id]);
  }
  showForm(){
    this.showAdd=true;
  }
 
  addEquipement(i:Equipement){ 
    this.listEquipement.push(i);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "add succefully",
      showConfirmButton: false,
      timer: 1500,
    })
   // this.listEquipement.push(i);
  // 9a3ed yaaml fil ajout fil base houni nrmlm ama mnch kaadin naaytoulha bch naadiwoulha l i dnc tji null 
  // pstt zid hawil feha aalh null khali nkml chwya fil projet :'( behi bb merci dsl 3ataltek
   //let resp= this.Equipementser.addEquipement(i).subscribe(()=>{
   // this.Equipementser.getAllEquipement().subscribe((data)=>{this.listEquipement=data;})
  //console.log("add equipement");
    };
  


 
      

  ngOnInit(): void {
    this.Equipementser.getAllEquipement().subscribe((data)=>this.EquipementData=data);

  }

  getEquipement()
{
  this.Equipementser.getEquipement().subscribe((allData)=>
  {
    console.log('aaaaaa',allData);
    this.EquipementData=allData;
  })
}
}*/