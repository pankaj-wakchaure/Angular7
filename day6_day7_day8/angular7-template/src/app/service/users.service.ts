import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseURL="https://jsonplaceholder.typicode.com/users";


  constructor(private http:HttpClient) {
    console.log("USers Service created....");
   }


   getAllUsers():Observable<any>{
     return this.http.get(this.baseURL);
   }

   getUserByUserId(userId:number){
    return this.http.get(this.baseURL+"/"+userId);
    }

  }
