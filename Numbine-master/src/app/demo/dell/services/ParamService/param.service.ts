import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParamService {
  static getPath = "http://localhost:8081/";
  constructor(private httpClient : HttpClient) { }


}
