import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Product } from 'src/app/demo/dell/models/Product'
import { NumbineSelectBoxComponent } from '../../../general-components/numbine-select-box/numbine-select-box.component';
import { SelectBoxItem } from '../../../models/SelectBoxItem';
@Component({
  selector: 'app-product-selector',
  templateUrl: './product-selector.component.html',
  styleUrls: ['./product-selector.component.scss']
})
export class ProductSelectorComponent implements OnInit, OnChanges {
  @Input()
  public labelText : string;
  @Input()
  public productList : Product[];

  public selectBoxItems : SelectBoxItem[];
  
  
  constructor() { }


  ngOnInit(): void {  }

  ngOnChanges(changes: SimpleChanges): void
  {
    this.selectBoxItems = this.generateSelectOptions();
  }


  generateSelectOptions() : SelectBoxItem[]
  {
    let items : SelectBoxItem[] = [];
    for (let i = 0; i < this.productList.length; i++) 
    {
      const element = this.productList[i];
      const selectItem = new SelectBoxItem();
      selectItem.id = i;
      selectItem.text = element.productName;
      items.push(selectItem);
    }
    console.log(this.productList);
    console.log(items);
    return items;
  }
}
