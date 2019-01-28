import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  baseURL="https://jsonplaceholder.typicode.com/comments";
  
  
  constructor(private http:HttpClient) {
    console.log("USers Service created....");
   }


   getAllComments():Observable<any>{
     return this.http.get(this.baseURL);
   }

   getAllCommentsByPostId(postId:number):Observable<any>{
    return this.http.get(this.baseURL+"?postId="+postId);
  }
}
