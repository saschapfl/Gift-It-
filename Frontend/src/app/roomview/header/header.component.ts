import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/contracts/room';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from 'src/app/services/room/room.service';
import { RoomComponent } from '../room/room.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public room: Room;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  stepper_index: number = 0;
  
  constructor(private roomComponent: RoomComponent, private route: ActivatedRoute, private roomService: RoomService, private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.roomComponent.getActiveRoom().subscribe(room => {
    this.room = room;
    this.setStepper();
   });
   this.firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  private setStepper(){
    let now = Date.now();
    let l_planning_date = new Date();
    let l_party_date = new Date();
    if(l_party_date.getTime() < now){
      this.stepper_index = 2;
    }
    else if(l_planning_date.getTime() < now){
      this.stepper_index = 1;
    }
    else{
      this.stepper_index = 0;
    }
  }
    

}
