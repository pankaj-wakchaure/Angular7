import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userId:number=0;
  user:{};
  message="";
   
  constructor(private route:ActivatedRoute,private us:UsersService){
   this.userId=route.snapshot.params.userId;
   console.log("Users Component created....."+this.userId);

   }

   ngOnInit() {
    console.log("Users Component initialized....."+this.userId);
     if(this.userId)
      this.getUser();
  }
  
     ngOnDestroy() {
      console.log("Users Component destroyed...."+this.userId);
       }
      
   

  getUser(){
    this.us.getUserByUserId(this.userId)
           .subscribe(response=>this.user=response,error=>this.message=error);   
  }
}
