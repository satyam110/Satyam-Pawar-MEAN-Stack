import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdvertisementService } from '../advertisement.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  title:string;
  advertisement:object;
  advertisements=[];
  constructor(private route:ActivatedRoute, private advService:AdvertisementService, private location:Location) { }
    
   
       
  ngOnInit(): void {
    
    this.title=this.route.snapshot.paramMap.get('id');
    //console.log(this.myAdsList);
    this.advertisement = this.advService.getAd(this.title);
    console.log(this.advertisement);
    
  }

  save(adv:object){
    this.advService.updateAd(adv);
    
  }
  back():void{
    this.location.back();
  }

}
