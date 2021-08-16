import { Component, OnInit } from '@angular/core';
import {NextConfig} from '../../../../../app-config';

@Component({
  selector: 'app-numbine-nav-left',
  templateUrl: './numbine-nav-left.component.html',
  styleUrls: ['./numbine-nav-left.component.scss']
})
export class NumbineNavLeftComponent implements OnInit {
  public flatConfig: any;

  constructor() {
    this.flatConfig = NextConfig.config;
  }
  ngOnInit() {
  }


}
