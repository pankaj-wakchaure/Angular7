import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  baseURL="https://jsonplaceholder.typicode.com/albums";

  constructor(private http:HttpClient) {
    console.log("USers Service created....");
   }


   getAllAlbums():Observable<any>{
     return this.http.get(this.baseURL);
   }

        getAllAlbumsByUserId(userId:Number):Observable<any>{
      return this.http.get(this.baseURL+"?userId="+userId);
    }
  }
