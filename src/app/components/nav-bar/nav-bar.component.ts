import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {


  loggedIn:Boolean
  name:string
  constructor() { }

  ngOnInit(): void {

    if(localStorage.getItem("loggedName"))
    {
      this.name=localStorage.getItem("loggedName")
      this.loggedIn=true  
    }
    else
    {
      this.loggedIn=false
    }
  }



  logout()
  {
    localStorage.removeItem('loggedUserid');
    localStorage.removeItem('loggedName');
    localStorage.removeItem('loggedUserEmail');
    localStorage.removeItem('loggedUserRole');
    localStorage.setItem('isloggedIn','unactive');
    location.reload();
    location.assign('/login');
  }

}
