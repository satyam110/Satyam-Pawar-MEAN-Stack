import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from 'src/app/restaurant';
import { RestaurantServiceService } from 'src/app/services/restaurant-service.service';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit {

  isAdmin:boolean;
  isUser:boolean;
  
  restaurant: Restaurant[];
  constructor(
    private route: ActivatedRoute,
    private resService: RestaurantServiceService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getRestaurant();
    this.isAdmin= this.resService.getAdmin();
    this.isUser= this.resService.getUser();
  }

  
  getRestaurant():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.restaurant = this.resService.getRestaurant(id);
    console.log(...this.restaurant);
  }

  back():void{
    this.location.back();
  }
  save(restaurant:Restaurant){
    this.resService.updateRestaurant(restaurant);
  }

}
