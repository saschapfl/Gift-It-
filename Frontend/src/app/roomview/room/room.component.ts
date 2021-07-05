import { Component, OnInit, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from '../../contracts/room';
import { RoomService } from '../../services/room/room.service';
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
      debugger;
      this.active_room = this.roomService.getRoom(Number(this.route.snapshot.paramMap.get('id')));
    }
    public getActiveRoom() : Observable<Room>{
      return this.active_room;
    }


  }