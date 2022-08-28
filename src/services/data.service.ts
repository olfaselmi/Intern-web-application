import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Equipement } from 'src/app/Model/equipement';

import { Observable } from 'rxjs';
import { Compalint } from 'src/app/Model/Compalint';
import { invitation } from 'src/app/Model/invitation';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;@Injectable({
  providedIn: 'root'
})
export class DataService {

  listclaim : string[];
  listinvitation : string[];
  listEquipement : string[];
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    
    })
  }

// url ='http://localhost:8089/SpringMVC/Invitation/';


 url ='http://localhost:8089/SpringMVC/Equipements';


  constructor(private http:HttpClient,private fb: FormBuilder,private route:Router) { }

  formModel = this.fb.group({
   
    Subject: [''],
    Description: [''],
    Date: [''],
    Etat: ['']
    
    
  });
getStatsINV(){
  return this.http.get<String>('http://localhost:8089/SpringMVC/Invitation/stat/invitation1');
}

getStatsINV2(){
  return this.http.get<String>('http://localhost:8089/SpringMVC/Invitation/stat/invitation2');
}

getStatsSomme(){
  return this.http.get<String>('http://localhost:8089/SpringMVC/Invitation/stat/invitationSOMME');
}
getAllinvitation(){
  return this.http.get('http://localhost:8089/SpringMVC/Invitation/get-all-Invitation')
}
deleteInvitation(id:any[]){
  return this.http.delete('http://localhost:8089/SpringMVC/Invitation/remove-Invitation/'+id)
}
getInvitationbyid(id:number):Observable<invitation>{
  return this.http.get<invitation>('http://localhost:8089/SpringMVC/Invitation/GetInvitationById/'+id)
}

   updateInvitation(id: number, Invitation:invitation):Observable<Object>{
  return this.http.put<invitation>('http://localhost:8089/SpringMVC/Invitation/modify-Invitation-byID/'+id, Invitation)

  }
    addInvitation(c:invitation):Observable<invitation>{
      return this.http.post<invitation>("http://localhost:8089/SpringMVC/Invitation/addInvitation",c,this.httpOptions);
      }
      AcceptInvitation(id:any[]){
        return this.http.post('http://localhost:8089/SpringMVC/Invitation/accepterInv/'+id,this.httpOptions)
      }
            
      AcceptEquipement(id:any[]){
        return this.http.put('http://localhost:8089/SpringMVC/Equipements/EquipementCheck/'+id,this.httpOptions)
      }
      
  
      
      getEquipement(){
        return this.http.get('http://localhost:8089/SpringMVC/Equipement/export/pdf')
      }
       
      addEquipement(equipement:Equipement){
    return this.http.post('http://localhost:8089/SpringMVC/Equipements/addEquipement',equipement);

    } 
    deleteEquipement(id:any[]){
      return this.http.delete('http://localhost:8089/SpringMVC/Equipements/remove-Equipement/'+id)
    }
    
    
    
    getEquipementbyid(id:number):Observable<Equipement>{
      return this.http.get<Equipement>('http://localhost:8089/SpringMVC/Equipements/EquipementsCheck/'+id)
    }
    
    
    
   /* UpdateEquipement(id:number,){
    
      this.route.navigate(['update-Equipement',id])
    
    }*/
    updateEquipement(Equipement:Equipement): Observable<Object>{
      return this.http.put<Equipement>('http://localhost:8089/SpringMVC/Equipements/modify-Equipements',Equipement)
    
    
    
    }
    getAllEquipement(){

      console.log();
      return this.http.get<Equipement[]>('http://localhost:8089/SpringMVC/Equipements/get-all-Equipements');
    }
    
}