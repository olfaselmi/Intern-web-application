import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent implements OnInit {
  usersList: any
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUserssFromServer().subscribe(res => {
      console.log('this is the response', res)
      this.usersList = res
    })
  }

}
