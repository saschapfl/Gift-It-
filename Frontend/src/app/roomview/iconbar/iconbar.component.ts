import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iconbar',
  templateUrl: './iconbar.component.html',
  styleUrls: ['./iconbar.component.scss']
})
export class IconbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public iconChanged(event){
    document.querySelector(".black").classList.remove("black");
    if(event.srcElement.nodeName === "BUTTON"){
      event.srcElement.childNodes[0].childNodes[0].classList.add("black");
    }
    else{
      event.srcElement.classList.add("black");
    }
    
  }
}
