import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/user';
import { UserService } from 'src/services/user.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  listUser: User[];
  currentUser: User;
  searchText:any;
  bestAuthor:User
  countUsers: number
  employes:number
  x1:any
  constructor(private UserService: UserService,private router: Router) { }
   

  ngOnInit(): void {
    this.UserService.getAllUserssFromServer().subscribe(
      (data:User[])=>{
        this.listUser= data
       
      } 



    )
    console.log(this.listUser)
    this.generateChart()
    let countUsers = localStorage.getItem('countUsers') ;
    console.log("from ngoninit " + countUsers)
    let employes=localStorage.getItem('employes')
    console.log("from employes" +  employes)
    let companies= Number(countUsers)- Number(employes)
    console.log(Number(companies))

   let pemployes= ((Number(employes)/ Number(countUsers))*100)
   let pcompanies = 100 - pemployes
    console.log("pourcentage employes: "+pemployes)
    console.log("pourcentage companies: "+pcompanies)

    /* const myChart = new Chart("myChart", {
      type: 'pie',
      data: {
        labels: ['Employees', 'Company'],
        datasets: [{
          label: 'Employees VS Companies',
          data: [pemployes,pcompanies],
          backgroundColor: [
            'rgb(7, 180, 159)',
            'rgb(112, 255, 84) ',

          ],
          borderColor: [
            'rgb(7, 180, 159)',
            'rgb(112, 255, 84) ',

          ],
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    }); */
  }
  
 
  delete(User: User){
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this user!",
      icon: "warning",
      buttons: ["Cancel","Confirm"],
      dangerMode: true,
    })
      .then((willDelete) => {

        if (willDelete) {
          //this.UserService.deleteListUserService(user.id);
          let i =this.listUser.indexOf(User)
          console.log(i);
          
          this.UserService.deleteUserById(User.id).subscribe(
            ()=>this.listUser.splice(i,1)
          )
          this.ngOnInit()
          swal("User has been deleted!", {
            icon: "success",
          });
        } else {
          swal("User is safe!");
        }
      });
 
   }
  load()
  {
    return this.UserService.getAllUserssFromServer().subscribe()
  }
  generateChart() {
    this.UserService.getAllUserssFromServer().subscribe( 
      (data) => {
         
      this.x1=data.length  

      localStorage.setItem('employes', this.x1);
      console.log(this.x1)


    }
    );
    }
  update(User: User){
  this.UserService.UpdateUser(User);
  this.router.navigate(['/add-user']);
  }

  ShowMore(User:User){
    this.UserService.getUserById(User.id).subscribe(
      (UserD:User)=>[this.UserService.MODUser(UserD),this.router.navigate(['/user/:id'])]
    )
  }

  

}


