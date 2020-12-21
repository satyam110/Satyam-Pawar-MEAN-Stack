import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Advertisement } from './advertisement';
@Injectable({
  providedIn: 'root'
})
export class AdvertisementService {

  constructor(private _http: HttpClient) { }
  myAds=[];
  myAd:object;
  // postAd(myAds:any){
  //   this.myAds = myAds;
  // }

  addAds(data:any){
    this.myAds.push(data);
    console.log(this.myAds);
  }

  getAds(){
    return this.myAds;
  }
  getAd(title:string){
    this.myAd = this.myAds.filter(m=>m.title === title);
    return this.myAd;
  }

  deleteAd(myAd:any){
    this.myAds = this.myAds.filter(m=>m!==myAd);
    console.log(this.myAds);
    return this.myAds;
  }

  updateAd(ad:any){
    this.myAds = this.myAds.map(m => {
      if(m.title === ad.title){
        m=ad;
      }
    });
  }
}
