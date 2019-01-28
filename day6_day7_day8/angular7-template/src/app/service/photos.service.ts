import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
 
  baseURL="https://jsonplaceholder.typicode.com/photos";
  
  constructor(private http:HttpClient) {
    console.log("USers Service created....");
   }


   getAllPhotos():Observable<any>{
     return this.http.get(this.baseURL);
   }
}
