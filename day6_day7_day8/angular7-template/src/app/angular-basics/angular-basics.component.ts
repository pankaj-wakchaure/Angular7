import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-angular-basics',
  templateUrl: './angular-basics.component.html',
  styleUrls: ['./angular-basics.component.css']
})
export class AngularBasicsComponent implements OnInit,OnDestroy {

 title='Angular Basics';

 colors=['RED','GREEN','BLUE','MAGENTA'];

 day=1;

 name={fname:'Pradeep',lname:'Chinchole'};//object
 
 show=true;

 hide=false;
 
 today=new Date();

 min=1;

 max=8;


 showHide(){
  this.hide=!this.hide;
}















  constructor() {
    console.log("AngularBasicsComponent created...");

   }

  ngOnInit() {
    console.log("AngularBasicsComponent initialized...");
    
  }

  ngOnDestroy() {
    console.log("AngularBasicsComponent destroyed...");
    
  }


}
