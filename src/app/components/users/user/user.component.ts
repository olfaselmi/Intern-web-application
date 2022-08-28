import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { User } from 'src/app/Model/user';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private UserService: UserService,private router: Router,private activated:ActivatedRoute) { }
  user:User;

  

  ngOnInit(): void {
    this.user=this.UserService.currentUser;
    this.activated.paramMap.subscribe(
      (params)=> {
        let id = params.get('id');
        this.UserService.getUserById(String(id)).subscribe(
          (data) => this.user = data
        )
      }
    )


  }
  
  
  return(){
    this.router.navigate(['/users']);
  }

  blockUser()
  {
    this.UserService.blockUser(this.user.id).subscribe(
     
    )
    this.router.navigate(['/users'])
  }


  unblockUser()
  {
    this.UserService.unblockUser(this.user.id).subscribe(
     
    )
    this.router.navigate(['/users'])
  }

  pdfMaker() {
    let data: any = document.getElementById('userspdf');
    html2canvas(data).then(canvas => {
      var imgData = canvas.toDataURL('image/png');
      var doc = new jsPDF('l', 'mm', 'a4');
      let imgHeight = canvas.height * 250 / canvas.width
      doc.addImage(imgData, 'PNG', 0, 10, 290, imgHeight)
      doc.save("users.pdf")

    });
  }

 
}


