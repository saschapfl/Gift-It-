import { Component, OnInit } from '@angular/core';
import { RoomComponent } from '../room/room.component';
import { Owner } from 'src/app/contracts/owner';
import { User } from 'src/app/contracts/user';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  private owner: Owner;
  private users: User[];

  constructor(private room: RoomComponent) { }

  ngOnInit() {
    this.room.getActiveRoom().subscribe((room)=> {
      this.owner = room.owner;
      this.users = room.users;
    })
  }

}
