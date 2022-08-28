import { Injectable } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { windowTime } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private route: Router) { }

  authenticate(username, password) {
    
    this.route.navigateByUrl('/home')
    if (username === "olfa.selmi@esprit.tn" && password === "234Esprit") {
      sessionStorage.setItem('username', username)
      localStorage.setItem('connected' , 'true')
      
      setTimeout(function () {
        location.reload()
    }, 1000);

      return true;
    } else {
      return false;
    }

   
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    location.reload();
    sessionStorage.removeItem('username')
    localStorage.setItem('connected','false')

  }


}