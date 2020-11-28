import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Advertisement } from '../advertisement';
import { AdvertisementService } from '../advertisement.service';

@Component({
  selector: 'app-advertisement-form',
  templateUrl: './advertisement-form.component.html',
  styleUrls: ['./advertisement-form.component.css']
})
export class AdvertisementFormComponent implements OnInit {

  categories=['Furniture','Hardware','Mobile'];
  name = "Satyam";
  topicHasError=true;
  @Output() addFormEvent = new EventEmitter();
  advertisement = new Advertisement('test','adv1','default','desc');
  constructor(private advService:AdvertisementService) { }

  ngOnInit(): void {
  }
  
  //myAds=[];
  onSubmit(advForm:any){
  
    //this.myAds.push(advForm.value);
    this.advService.addAds(advForm.value);
    
  }

  validateTopic(value : string){
    if(value==="default"){
      this.topicHasError=true;
    }else{
      this.topicHasError=false;
    }
   }
}
