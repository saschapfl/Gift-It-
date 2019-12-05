import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enter-room',
  templateUrl: './enter-room.component.html',
  styleUrls: ['./enter-room.component.scss']
})
export class EnterRoomComponent implements OnInit {
  key: string = "";
  key_valid: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  checkForm(){
    if(this.key != ""){
      this.key_valid = true;
    }
    else{
      this.key_valid = false;
    }
  }
}
