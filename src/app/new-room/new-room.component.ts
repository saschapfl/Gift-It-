import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-new-room',
  templateUrl: './new-room.component.html',
  styleUrls: ['./new-room.component.scss']
})
export class NewRoomComponent implements OnInit {

  submit_disabled: boolean = true;
  roomname: string = "";
  idea_deadline: Date;
  final_deadline: Date;
  description: string = "";

  constructor() { }

  ngOnInit() {
  }
  checkForm() {
    this.submit_disabled = true;
    if (this.roomname == ""){
      
    }
    else if(this.idea_deadline == null){

    }
    else if(this.final_deadline == null){

    }
    else if(this.description == ""){

    }
    else{
      this.submit_disabled = false;
    }
  }
}
