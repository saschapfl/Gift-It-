import { Component, OnInit } from '@angular/core';
import { RoomComponent } from '../room/room.component';
import { Owner } from 'src/app/contracts/owner';
import { User } from 'src/app/contracts/user';
import { UserService } from 'src/app/services/user/user.service';
import { Room } from 'src/app/contracts/room';
import { MatDialog } from '@angular/material';
import { AddUserDialogComponent } from './add-user-dialog/add-user-dialog/add-user-dialog.component';
import { RoomService } from 'src/app/services/room/room.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  private room: Room;
  private users: User[];

  constructor(private roomComponent: RoomComponent, private roomService: RoomService, private userService: UserService, public dialog: MatDialog) { }

  ngOnInit() {
    this.roomComponent.getActiveRoom().subscribe((room)=> {
      this.room = room;
      this.users = [];
      this.users.push(room.owner);
      this.room.users = this.users;
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddUserDialogComponent, {
      width: '250px',
      data: {username: ""}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("dialog closed");
      var newUser : User = new User();
      newUser.username = result;
      newUser.room = this.room;
      this.userService.createUser(newUser).subscribe(user => this.users.push(user));
    });
  }

}
