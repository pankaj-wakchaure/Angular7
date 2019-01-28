import { Component, OnInit } from '@angular/core';
import { Response } from 'selenium-webdriver/http';
import { AlbumService } from 'src/app/service/albums.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  title= 'Albums';
  albums: any[];
  message=''; 
  userId=0;
  
  constructor(private al : AlbumService, private route:ActivatedRoute) {
    this.userId = this.route.snapshot.queryParams.userId;
    console.log("Albums Component Started ");
   }

  ngOnInit() {
    if(this.userId)
      {   this.getAllAlbumsByUserId()
      }else{
        this.getAllAlbums();
      }
    console.log("AlbumsComponent initialized...");
    
  }

  ngOnDestroy() {
    console.log("AlbumsComponent destroyed...");
     }

     getAllAlbums(){
      this.al.getAllAlbums()
             .subscribe(response=>this.albums=response,
               error=>this.message=error); 
    }

    getAllAlbumsByUserId(){
      this.al.getAllAlbumsByUserId(this.userId)
             .subscribe(response=>this.albums=response,
               error=>this.message=error); 
    }
}
