import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbine-table',
  templateUrl: './numbine-table.component.html',
  styleUrls: ['./numbine-table.component.scss']
})
export class NumbineTableComponent implements OnInit {

  @Input()
  dataTable: DataTable = new DataTable();
  constructor() {
  }

  ngOnInit(): void {
  }
}
export class DataTable{
  public titles: String[]
  public rows: any[][]
}
