import { Component, OnInit } from '@angular/core';
import { RestaurantServiceService } from 'src/app/services/restaurant-service.service';

import { Menu } from '../../menu';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus:Menu[];
  isAdmin:boolean;
  isUser:boolean;
  isOwner:boolean;
  constructor(private resService:RestaurantServiceService) { }

  ngOnInit(): void {
    this.menus= this.resService.getMenus();
    this.isAdmin= this.resService.getAdmin();
    this.isUser= this.resService.getUser();
    this.isOwner=this.resService.getOwner();
    console.log("from menu ",this.isAdmin,this.isOwner,this.isUser)
  }

  addMenu(value:string){
    this.resService.addMenu(value);
  }

  deleteMenu(menu:Menu){
    this.menus = this.resService.deleteMenu(menu);
  }
  
}
