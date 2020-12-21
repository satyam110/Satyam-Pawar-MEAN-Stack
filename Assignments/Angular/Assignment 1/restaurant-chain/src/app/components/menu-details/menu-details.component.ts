import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from 'src/app/restaurant';
import { RestaurantServiceService } from 'src/app/services/restaurant-service.service';
import {Menu} from '../../menu';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.css']
})
export class MenuDetailsComponent implements OnInit {
  menu:Menu[];
  restaurants:Restaurant[];
  constructor(
    private location:Location,
    private resService:RestaurantServiceService,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getMenu();
    this.restaurants=this.resService.getRestaurants();
  }

  getMenu():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.menu = this.resService.getMenu(id);
    //console.log(this.menu);
  }

  back():void{
    this.location.back();
  }
  save(menu:Menu){
    this.resService.updateMenu(menu);
  }
  assign(res:string,menuName:string){
    //console.log(res,menuName);
    this.resService.assignMenu(res,menuName);
  }
}
