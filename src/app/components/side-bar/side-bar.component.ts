import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  loggedIn:Boolean

  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem("loggedName"))
    {
      this.loggedIn=true  
    }
    else
    {
      this.loggedIn=false
    }
    
  }

}
