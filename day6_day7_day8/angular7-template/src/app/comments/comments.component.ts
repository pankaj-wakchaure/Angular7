import { Component, OnInit } from '@angular/core';
import { CommentsService } from 'src/app/service/comments.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  title= 'Comments';
  comments: any[];
  message='';  
  postId=0;

  constructor(private cm : CommentsService, private route:ActivatedRoute) {    
    this.postId=this.route.snapshot.queryParams.postId;
    console.log("Comments Component Started ");
   }

  ngOnInit() {
    if(this.postId)
    {
      this.getAllCommentsByPostId();
    }
    else{
      this.getAllComments();
    }
    console.log("CommentsComponent initialized...");    
  }

  ngOnDestroy() {
    console.log("CommentsComponent destroyed...");
     }

     getAllComments(){
      this.cm.getAllComments()
             .subscribe(response=>this.comments=response,
               error=>this.message=error); 
    }

    getAllCommentsByPostId(){
      this.cm.getAllCommentsByPostId(this.postId)
             .subscribe(response=>this.comments=response,
               error=>this.message=error); 
    }
}
