import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enter-room',
  templateUrl: './enter-room.component.html',
  styleUrls: ['./enter-room.component.scss']
})
export class EnterRoomComponent implements OnInit {
  key: string = "";
  key_valid: boolean = false;

  constructor(private router: Router) { }

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
  onEnterRoom(){
    this.router.navigate(["/room/" + this.key]);
  }
}
