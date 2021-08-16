import { Component, Input, OnInit } from '@angular/core';
import {DataTable} from 'src/app/demo/dell/models/DataTable'
@Component({
  selector: 'app-numbine-table',
  templateUrl: './numbine-table.component.html',
  styleUrls: ['./numbine-table.component.scss']
})
export class NumbineTableComponent implements OnInit {
  
  @Input()
  dataTable: DataTable = new DataTable();
  constructor() { }

  ngOnInit(): void {
  }

}