import { Component, OnInit } from '@angular/core';
import{ForgotPassService} from 'src/app/demo/dell/services/forgot-pass.service';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.scss']
})
export class ForgotPassComponent implements OnInit {

  public loading: boolean=true ;
    constructor(private forgotPassService: ForgotPassService) { }
    passReset (email:string){
      this.forgotPassService.passResetAssync(
        email =>
        { 
        console.log('pass changed',email);
        this.loading=false;
      },
        err=>{
          alert("something went wrong");
          this.loading=false;
        },
        email);
      
    }
  
    ngOnInit(): void {
      
    }

}
