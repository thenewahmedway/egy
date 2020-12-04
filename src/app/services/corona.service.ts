import { Injectable, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoronaService {
  constructor(private http:HttpClient) { }
  
  summary():Observable<any>{  // all of night
    let url= "https://api.covid19api.com/summary";
    return this.http.get<any>(url)
  }

  
  Alldata(country):Observable<any>{
    let url= "https://api.covid19api.com/total/dayone/country/"+country;
    return this.http.get<any>(url); 
  }
        
}
