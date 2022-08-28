import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/Model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  listUsers : string[];
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    
    })
  }
  constructor(private myHttp : HttpClient) { }
  currentUser:User= new User();
    status:boolean=false;
    MODUser(User:User){
      this.currentUser=User;
    }
    UpdateUser(User:User){
      this.currentUser=User;
      this.status=true;
    }
  readonly BaseURI = 'http://localhost:8089/SpringMVC';

 
  getAllUserssFromServer(): Observable<User[]> {
     
    return this.myHttp.get<User[]>(this.BaseURI+'/users');
  }


  verifyUser(email:String):Observable<User>{
    return this.myHttp.get<User>(this.BaseURI+"/find-user-by-email/"+email);
    }

  deleteUserById(id:any){
    return this.myHttp.delete(this.BaseURI+"/remove-user/"+id);
    }

    blockUser(id:any){
      return this.myHttp.put(this.BaseURI+"/blockUser/"+id,this.httpOptions);
    }

    unblockUser(id:any){
      return this.myHttp.put(this.BaseURI+"/unblockUser/"+id,this.httpOptions);
    }

   addUser(user:User):Observable<User>{
    return this.myHttp.post<User>(this.BaseURI+"/saveUser/",user,this.httpOptions);
     }

     getUserById(idUser:any):Observable<User>{
       return this.myHttp.get<User>(this.BaseURI+"/user/"+idUser);
       }
 

       updateUserService (user: User){
        return this.myHttp.put<User>(this.BaseURI+'/updateUser/', user,
        this.httpOptions);
        }

   
  authenticate(user:User){
    return this.myHttp.post<User>(this.BaseURI+'/authenticate-user',user);
  }
  verifyPassword(user:User){
    return this.myHttp.post<boolean>(this.BaseURI+'/verify-password-user',user);
  }
  resetPassword(user:User){
    return this.myHttp.post(this.BaseURI+'/reset-password-user',user);
  }
        

}


