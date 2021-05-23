import { Injectable, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoronaService {
  constructor(private http:HttpClient) { }
  
  Alldata():Observable<any>{  // all of data
    let url= "https://api.covid19api.com/summary";
    return this.http.get<any>(url)  
  }

  
  dayone(country):Observable<any>{   //for dayone of country 
    let url= "https://api.covid19api.com/total/dayone/country/"+country;
    return this.http.get<any>(url); 
  }
        
}
