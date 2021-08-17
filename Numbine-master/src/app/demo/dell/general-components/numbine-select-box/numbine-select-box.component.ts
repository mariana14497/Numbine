import { Component, Input, OnInit } from '@angular/core';
import { SelectBoxItem} from '../../models/SelectBoxItem';

@Component({
  selector: 'app-numbine-select-box',
  templateUrl: './numbine-select-box.component.html',
  styleUrls: ['./numbine-select-box.component.scss']
})
export class NumbineSelectBoxComponent implements OnInit {
  @Input() 
  data : SelectBoxItem[];
  @Input() 
  title : String;
  @Input() 
  id : number;
  @Input()
  cssClass = "col-sm-12 col-xl-3 m-b-30";
  selected: number = 1;
  constructor(){}

  ngOnInit(): void {
  }


  selectOption(id: number) {
    this.selected=id;
  }

  get selectedId():number{
    return this.selected;
  }


}
