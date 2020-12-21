import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from 'src/app/restaurant';
import { RestaurantServiceService } from 'src/app/services/restaurant-service.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

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

  order(item:string){
    alert("Order of "+item+" placed successfully!!!")
  }
}
