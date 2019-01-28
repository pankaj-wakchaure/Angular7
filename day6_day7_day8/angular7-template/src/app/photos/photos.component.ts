import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../service/photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  title= 'Photos';
  photos: any[];
  message='';

  constructor(private ph : PhotosService) {
    console.log("Photos Component Started ");
   }

  ngOnInit() {
    this.getAllPhotos();
    console.log("PhotosComponent initialized...");
    
  }

  ngOnDestroy() {
    console.log("PhotosComponent destroyed...");
     }

     getAllPhotos(){
      this.ph.getAllPhotos()
             .subscribe(response=>this.photos=response,
               error=>this.message=error); 
    }}
