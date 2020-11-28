import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/restaurant';
import { RestaurantServiceService } from 'src/app/services/restaurant-service.service';
@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  isAdmin:boolean;
  isUser:boolean;
  isOwner:boolean;
  name:string;
  restaurants : Restaurant[];
  

  constructor(private resService:RestaurantServiceService) { }

  ngOnInit(): void {

    this.restaurants = this.resService.getRestaurants();
    length = this.restaurants.length;
    this.isAdmin= this.resService.getAdmin();
    this.isUser= this.resService.getUser();
    this.isOwner=this.resService.getOwner();
    console.log("from restaurant ",this.isAdmin,this.isOwner,this.isUser)
  }
  
  addRestaurant(value:string){
    this.resService.addRestaurant(value);
  }
  deleteRestaurant(restaurant:Restaurant){
    this.restaurants = this.resService.deleteRestaurant(restaurant);
  }
}
