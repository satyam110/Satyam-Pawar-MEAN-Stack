import { Component, OnInit } from '@angular/core';
import { RestaurantServiceService } from './services/restaurant-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isAdmin:boolean;
  isUser:boolean;
  isOwner:boolean;

  constructor(private resService:RestaurantServiceService){}

  ngOnInit(){
    this.admin();
    this.owner();
    this.user();

    console.log("from app ",this.isAdmin,this.isOwner,this.isUser)
    
  }  
  
  admin(){
    this.isAdmin=true;
    this.isUser=false;
    this.isOwner=false;
    this.resService.setUser(this.isAdmin,this.isUser,this.isOwner);
  }
  user(){
    this.isAdmin=false;
    this.isUser=true;
    this.isOwner=false;
    this.resService.setUser(this.isAdmin,this.isUser,this.isOwner);
  }
  owner(){
    this.isOwner=true;
    this.isAdmin=false;
    this.isUser=false;
    this.resService.setUser(this.isAdmin,this.isUser,this.isOwner);
  }
}
