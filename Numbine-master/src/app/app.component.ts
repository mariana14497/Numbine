import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import { DataTable } from './demo/dell/models/DataTable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private router: Router) { }
  title = ['aa','bb'];
  rows = [[1,2],[3,4]]
  dataTable = new DataTable();
  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });

    this.dataTable.titles=this.title;
    this.dataTable.rows=this.rows;
  }
}
