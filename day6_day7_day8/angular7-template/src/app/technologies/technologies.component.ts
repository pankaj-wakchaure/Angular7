import { Component  } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent{

title='Top 5 Technologies';

technologies=[
  {id:1,name:'Angular',likes:0,dislikes:0},
  {id:2,name:'Big Data',likes:0,dislikes:0},
  {id:3,name:'Micro Services',likes:0,dislikes:0},
  {id:4,name:'Spring Boot',likes:0,dislikes:0},
  {id:5,name:'Cloud Computing',likes:0,dislikes:0},
];


  constructor() {
    console.log("TechnologiesComponent created...");

   }

  ngOnInit() {
    console.log("TechnologiesComponent initialized...");
    
  }

  ngOnDestroy() {
    console.log("TechnologiesComponent destroyed...");
    
  }

  incrementLikes(t){
    t.likes++;
  }

  incrementDislikes(t){
    t.dislikes++;
  }


}
