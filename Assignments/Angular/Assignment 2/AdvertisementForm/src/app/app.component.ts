import { Component, OnInit } from '@angular/core';
import { AdvertisementService } from './advertisement.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  myAdsList=[];

  constructor(private advService:AdvertisementService){}

  // addAds(data:any){
  //   this.myAdsList.push(data);
  //   console.log(this.myAdsList);
  // }
  ngOnInit(){
    
    //this.myAdsList=this.advService.getAds();
  }
  // deleteAd(myAd:object){
  //   this.myAdsList = this.advService.deleteAd(myAd);
  //   console.log(this.myAdsList);
  // } 
}
