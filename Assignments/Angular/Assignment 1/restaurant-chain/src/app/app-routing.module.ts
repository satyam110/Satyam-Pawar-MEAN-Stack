import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { MenuDetailsComponent } from './components/menu-details/menu-details.component';
import { MenuComponent } from './components/menu/menu.component';
import { OrderComponent } from './components/order/order.component';
import { RestaurantDetailsComponent } from './components/restaurant-details/restaurant-details.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {path:'', redirectTo:'user', pathMatch:'full'},
  {path:'user', component: UserComponent},
  {path:'admin', component: AdminComponent},
  {path: 'restaurants', component: RestaurantComponent},
  {path: 'restaurants/:id', component: RestaurantDetailsComponent},
  {path: 'restaurant/:id', component: OrderComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'menus/:id', component:MenuDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [UserComponent,AdminComponent,RestaurantComponent,MenuComponent, RestaurantDetailsComponent, MenuDetailsComponent,OrderComponent];
