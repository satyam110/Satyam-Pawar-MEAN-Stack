import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdvertisementService } from '../advertisement.service';

@Component({
  selector: 'app-advertisment-table',
  templateUrl: './advertisment-table.component.html',
  styleUrls: ['./advertisment-table.component.css']
})
export class AdvertismentTableComponent implements OnInit {

  //@Input() myAdsList;

  myAdsList=[];
  query:string;
  @Output() deleteEvent = new EventEmitter();
  constructor(private advService:AdvertisementService) { }

  ngOnInit(): void {
    this.myAdsList = this.advService.getAds();
    
  }
  delete(myAd:object){
    //this.deleteEvent.emit(myAd);
    this.myAdsList=this.advService.deleteAd(myAd);
  }
  

  edit(myAd:object){
    
  }
  
}
