import { Component, OnInit } from '@angular/core';
import { PostsService } from '../service/posts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
title='Posts'
  posts:any[];
  message='';
  userId=0;
  
    constructor(private ps:PostsService,private route:ActivatedRoute) {
      this.userId=this.route.snapshot.queryParams.userId;
      console.log("PostsComponent created..."+this.userId);
     }
  
    ngOnInit() {
      if(this.userId)
        this.getAllPostsByUserId();
      else
       this.getAllPosts();
      console.log("PostsComponent initialized...");
      
    }
  
    ngOnDestroy() {
      console.log("PostsComponent destroyed...");
       }
  
  
       getAllPosts(){
         this.ps.getAllPosts()
                .subscribe(response=>this.posts=response,
                  error=>this.message=error); 
       }

       getAllPostsByUserId(){
        this.ps.getAllPostsByUserId(this.userId)
               .subscribe(response=>this.posts=response,
                 error=>this.message=error); 
      }

  

}
