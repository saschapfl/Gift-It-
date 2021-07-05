import { Component, OnInit, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from 'src/app/contracts/room';
import { RoomService } from 'src/app/services/room/room.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  private active_room: Observable<Room>;


    constructor(private route: ActivatedRoute, private roomService: RoomService){

    }
    ngOnInit(){
      this.active_room = this.roomService.getRoom(Number(this.route.snapshot.paramMap.get('id')));
    }
    public getActiveRoom() : Observable<Room>{
      return this.active_room;
    }


  }