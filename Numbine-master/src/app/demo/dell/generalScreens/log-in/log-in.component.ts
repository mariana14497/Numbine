import { Component, OnInit } from '@angular/core';
import {ButtonClass} from 'src/app/demo/enums/myenum.enum';
import{LogInServiceService} from 'src/app/demo/dell/services/log-in-service.service'
import { FormControl } from '@angular/forms';
import { NgIf } from '@angular/common';
import { User } from '../../models/User';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  
  public usr :User;
  public loading: boolean=true ;
    buttonClass = ButtonClass;
    constructor(private logInService: LogInServiceService) { }
    submit (email:string, password: string){
      this.logInService.validteUserAsync(
        usr =>
        {this.usr=usr; 
        console.log('test',usr);
        this.loading=false;
      },
        err=>{
          alert("something went wrong");
          this.loading=false;
        },
        email,password);
      
    }
  
    ngOnInit(): void {
      
    }
  

}