import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForgotPassService {

  constructor() { }

  public passResetAssync(successCallback,failCallback,email:string): void{
    setTimeout(()=>{
      try{
     successCallback(email);}
     catch(err){
       failCallback(err);
 
     }
    },3000);
   }
}
