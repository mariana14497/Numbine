import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
import {NextConfig} from '../../../../app-config';

@Component({
  selector: 'app-numbine-navbar',
  templateUrl: './numbine-navbar.component.html',
  styleUrls: ['./numbine-navbar.component.scss']
})
export class NumbineNavbarComponent implements OnInit {
  public headerBackgroundColor: string;
  public flatConfig: any;
  public menuClass: boolean;
  public collapseStyle: string;
  public windowWidth: number;

  @Output() onNavCollapse = new EventEmitter();
  @Output() onNavHeaderMobCollapse = new EventEmitter();

  constructor() {
    this.flatConfig = NextConfig.config;
    this.menuClass = false;
    this.collapseStyle = 'none';
    this.windowWidth = window.innerWidth;
    this.setHeaderBackground()
  }

  ngOnInit() { }

  toggleMobOption() {
    this.menuClass = !this.menuClass;
    this.collapseStyle = (this.menuClass) ? 'block' : 'none';
  }

  navCollapse() {
    if (this.windowWidth >= 992) {
      this.onNavCollapse.emit();
    } else {
      this.onNavHeaderMobCollapse.emit();
    }
  }

  setHeaderBackground() {
    // this.headerBackgroundColor = background;
    // this.flatConfig.headerBackColor = background;
    document.querySelector('.pcoded-header').classList.remove('header-blue');
    document.querySelector('.pcoded-header').classList.remove('header-red');
    document.querySelector('.pcoded-header').classList.remove('header-purple');
    document.querySelector('.pcoded-header').classList.remove('header-info');
    document.querySelector('.pcoded-header').classList.remove('header-green');
    document.querySelector('.pcoded-header').classList.remove('header-dark');

    document.querySelector('.pcoded-header').classList.add('header-dark');

  }


  
}
