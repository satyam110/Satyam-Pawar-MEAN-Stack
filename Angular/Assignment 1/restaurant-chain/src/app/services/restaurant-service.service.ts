import { Injectable } from '@angular/core';
import { Restaurant } from '../restaurant';
import { Menu } from '../menu';
@Injectable({
  providedIn: 'root'
})
export class RestaurantServiceService {

  isAdmin:boolean;
  isUser:boolean;
  isOwner:boolean;

  menus : Menu[] = [
    {
      id:1,
      menuName:'Pizza'
    },
    {
      id:2,
      menuName:'Fries'
    },
    {
      id:3,
      menuName: 'Tacos'
    }
  ]
  restaurants : Restaurant []= [
    {
    id:1,
    name: 'Mc Donalds',
    menu:['Fries','Burger']
  },
  {
    id:2,
    name: 'KFC',
    menu:['Chicken Wing','Burger']
  }
]
  constructor() { }
  
  //Managing active user
  setUser(admin,user,owner){
    this.isAdmin=admin;
    this.isUser=user;
    this.isOwner=owner;
  }
  getUser(){
    return this.isUser;
  }
  getAdmin(){
    return this.isAdmin;
  }
  getOwner(){
    return this.isOwner;
  }

  // Managing Restaurants Operations

  getRestaurants(){
    return this.restaurants;
  }
  
  getRestaurant(id:number){
    return this.restaurants.filter(r => r.id === id);
  }
  
  addRestaurant(value:string){
    this.restaurants.push({id:this.restaurants.length+1,name:value,menu:[]});
  }

  deleteRestaurant(restaurant:Restaurant){
      this.restaurants = this.restaurants.filter(r => r !== restaurant);
      return this.restaurants;
  }

  updateRestaurant(restaurant:Restaurant){
    this.restaurants.map(r=>{ 
      if(r.id===restaurant.id){
        r=restaurant
      }
    });
  }
  
  //managing menu operations
  addMenu(value:string){
    this.menus.push({id:this.menus.length+1, menuName:value});
  }

  getMenus(){
    return this.menus;
  }

  getMenu(id:number){
    return this.menus.filter( m => m.id === id);
  }

  deleteMenu(menu:Menu){
    this.menus= this.menus.filter(m => m !== menu);
    return this.menus;
  }

  assignMenu(res:string,menuName:string){
    this.restaurants.map(r => {
      if(r.name === res){
        r.menu.push(menuName);
      }
    })
  }

  updateMenu(menu:Menu){
    this.menus.map(m=>{
      if(m.id === menu.id){
        m=menu
      }
    })
  }
}
