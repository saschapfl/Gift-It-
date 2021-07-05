import { Component, OnInit, Input } from '@angular/core';
import { RoomService } from '../services/room/room.service';
import { HttpHeaders } from '@angular/common/http';
import { Room } from '../contracts/room';
import {Router} from '@angular/router';
import { Owner } from '../contracts/owner';

@Component({
  selector: 'app-new-room',
  templateUrl: './new-room.component.html',
  styleUrls: ['./new-room.component.scss']
})
export class NewRoomComponent implements OnInit {

  submit_disabled: boolean = true;
  owner:Owner = new Owner();
  room: Room = new Room();
  

  constructor(private roomService: RoomService, private router: Router) { 
    this.room.owner = this.owner;
  }

  ngOnInit() {
  }
  checkForm() {
    this.submit_disabled = true;
    if (this.room.name == ""){
      
    }
  
  }
  onCreateRoom(){
    this.roomService.addRoom(this.room)
    .subscribe(room => this.router.navigate(["/room/" + room.id]));

  }
}
