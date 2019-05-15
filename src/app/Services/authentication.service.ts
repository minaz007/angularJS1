import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


import { User } from '../models/User';

@Injectable({ providedIn: 'root' })
export class AuthenticationService { 
  
   
    constructor(private http: HttpClient) {
     
  }
        
    
  getUserName() {
    return this.http.get('http://192.168.1.6:3000/api/v1/username', {
      observe: 'body',
      params: new HttpParams().append('token', localStorage.getItem('token'))
    });
  }

    login(body:any){
        return this.http.post('http://192.168.1.6:3000/api/login', body,{
          observe:'body'
        });
      }   

    logout() {        
        localStorage.removeItem('currentUser');
       
    }


}
