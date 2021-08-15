import { Component, OnInit } from '@angular/core';
import {ButtonClass} from 'src/app/demo/enums/myenum.enum'
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  buttonClass = ButtonClass;
  constructor() { }

  ngOnInit(): void {
  }
  

}
