import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-room',
  templateUrl: './new-room.component.html',
  styleUrls: ['./new-room.component.scss']
})
export class NewRoomComponent implements OnInit {

  submit_disabled = true;
  public roomname: string;
  idea_deadline = null;
  final_dealine = null;
  description = "";

  constructor() { }

  ngOnInit() {
  }
  checkForm() {
    this.submit_disabled = true;
    if (this.roomname == null){

    }
    else{
      this.submit_disabled = false;
    }
  }
}
