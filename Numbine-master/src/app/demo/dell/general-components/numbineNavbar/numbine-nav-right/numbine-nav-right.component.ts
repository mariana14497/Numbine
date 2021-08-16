import { Component, OnInit } from '@angular/core';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-numbine-nav-right',
  templateUrl: './numbine-nav-right.component.html',
  styleUrls: ['./numbine-nav-right.component.scss'],
  providers: [NgbDropdownConfig]
})
export class NumbineNavRightComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
