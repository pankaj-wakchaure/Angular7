import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  baseURL="https://jsonplaceholder.typicode.com/todos";
  
  constructor(private http : HttpClient) { 
    console.log("Todos Service created....");
  }

  getAllTodos() : Observable<any>{
    return this.http.get(this.baseURL);
  }

  
  getAllTodosByUserId(userId:number):Observable<any>{
    return this.http.get(this.baseURL+"?userId="+userId);
  }

}
