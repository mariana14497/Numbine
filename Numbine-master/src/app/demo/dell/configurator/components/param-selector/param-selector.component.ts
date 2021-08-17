// import { Component, OnInit } from '@angular/core';
import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { EventEmitter } from 'events';
import { Parameter } from 'src/app/demo/dell/models/Parameter'
import { NumbineSelectBoxComponent } from '../../../general-components/numbine-select-box/numbine-select-box.component';
import { SelectBoxItem } from '../../../models/SelectBoxItem';

@Component({
  selector: 'app-param-selector',
  templateUrl: './param-selector.component.html',
  styleUrls: ['./param-selector.component.scss']
})
export class ParamSelectorComponent implements OnInit, OnChanges {

  @Input()
  public labelText : string;
  @Input()
  public paramList : Parameter[];

  public selectBoxItems : SelectBoxItem[];
  selectedIndex: number = 0;
  selectedParameter : Parameter;

  @Output()
  public onSelectionChanged : EventEmitter<Parameter> = new EventEmitter<Parameter>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void
  {
    this.selectBoxItems = this.generateSelectOptions();
    this.onSelectParam(0);
  }


  generateSelectOptions() : SelectBoxItem[]
  {
    let items : SelectBoxItem[] = [];
    for (let i = 0; i < this.paramList.length; i++) 
    {
      const element = this.paramList[i];
      const selectItem = new SelectBoxItem();
      selectItem.id = i;
      selectItem.text = element.parameterName;
      items.push(selectItem);
    }
    return items;
  }

  onSelectParam(index : number)
  {
    this.selectedParameter = this.paramList[index];
    this.onSelectionChanged.emit(this.selectedParameter);
    console.log(this.selectedParameter);
  }

  ngOnInit(): void {
  }

}

// <

