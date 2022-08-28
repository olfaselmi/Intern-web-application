import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { json } from 'd3';
import { data } from 'jquery';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-statsinvitation',
  templateUrl: './statsinvitation.component.html',
  styleUrls: ['./statsinvitation.component.css']
})


export class StatsinvitationComponent implements OnInit {
Stat:any;
Stat2:any;
Stat3:any;
  constructor(private statsser:DataService,private router:Router) { }

  ngOnInit(): void {
    
//this.lala();
this.statsser.getStatsINV().subscribe((allData)=>{
  this.Stat=allData;
  
  console.log(allData);

})



this.statsser.getStatsINV2().subscribe((allData)=>{
  this.Stat2=allData;
  
  console.log(allData);

})


this.statsser.getStatsSomme().subscribe((allData)=>{
  this.Stat3=allData;
  
  console.log(allData);

})





}






 //lala(){
  //return this.statsser.getStatsINV().subscribe((allData)=>
  //{
   //JSON.stringify(allData)
   //console.log(typeof(allData))
   //const myJSON = JSON.stringify(console.error());
 //  console.log(JSON.parse(myJSON));
 //console.log(myJSON)
  ///})
}

