import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/Model/user';

@Component({
  selector: 'app-child-user',
  templateUrl: './user-child.component.html',
  styleUrls: ['./user-child.component.css']
})
export class UserChildComponent implements OnInit {


  @Input() listUser:User[];
  @Output()deleteEvent=new EventEmitter<User>();
  @Output()updateEvent=new EventEmitter<User>();
  
  constructor() { }


  searchText:any;


  ngOnInit(): void {
  }
  delete(currentUser:User){
    this.deleteEvent.emit(currentUser);
  }
  update(currentUser:User){
    this.updateEvent.emit(currentUser);
  }
}
