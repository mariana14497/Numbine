import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebServiseService {
  

  private httpLink ="http://192.168.0.168:8080/";

  constructor(private httpClient: HttpClient) {
  }

  public  callService<T>(endPointURL:String): Observable<T> {
    return this.httpClient.get<T>(this.httpLink + endPointURL);
  }

}
