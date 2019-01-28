import { Component, OnInit } from '@angular/core';
import { TodosService } from '../service/todos.service';
import { Response } from 'selenium-webdriver/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  title= 'Todos';
  todos: any[];
  userId=0;
  message='';
  
  constructor(private ts : TodosService,private route:ActivatedRoute) {
    this.userId=this.route.snapshot.queryParams.userId;
    console.log("ToDo Component Started ");
   } 

  ngOnInit() {
    if(this.userId)
    {
      this.getAllTodosByUserId()
    }
    else
    {
    this.getAllTodos();
    }
    console.log("TodoComponent initialized...");
    
  }

  ngOnDestroy() {
    console.log("TodoComponent destroyed...");
     }
     
     getAllTodos(){
       this.ts.getAllTodos()
              .subscribe(response=>this.todos=response,
                error=>this.message=error); 
     }

     getAllTodosByUserId(){
      this.ts.getAllTodosByUserId(this.userId)
             .subscribe(response=>this.todos=response,
               error=>this.message=error); 
    }
  }
