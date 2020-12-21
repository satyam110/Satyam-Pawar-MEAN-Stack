import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvertismentTableComponent } from './advertisment-table/advertisment-table.component';
import { EditProductComponent } from './edit-product/edit-product.component';

const routes: Routes = [
  {path:'', redirectTo:'table', pathMatch:'full'},
  {path:'table', component:AdvertismentTableComponent},
  {path:'table/edit/:id', component:EditProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
