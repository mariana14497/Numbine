import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbine-check-box',
  templateUrl: './numbine-check-box.component.html',
  styleUrls: ['./numbine-check-box.component.scss']
})
export class NumbineCheckBoxComponent implements OnInit {

  @Input() content : String;
  @Input() title : String;
  @Input() id: number;
  isChecked: boolean =false;
  constructor() { }

  ngOnInit(): void {
  }

  getID():number{
    return this.id;
  }
  getCheckedStatuse():boolean{
    return this.isChecked;
  }

  
onNgModelChange(e: boolean) { // here e is a boolean, true if checked, otherwise false
  if (e) {
    this.isChecked=true;
  } else {
    this.isChecked=false;
  }
}

}
