import { Component, OnInit } from '@angular/core';
import { DataTable } from '../../../models/DataTable';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit(): void {
    this.dataTable.titles=this.title
  this.dataTable.rows=this.rows;
  }
  title = ['aa','bb'];
  rows = [[1,2],[3,4]];
  dataTable = new DataTable();
  
}
