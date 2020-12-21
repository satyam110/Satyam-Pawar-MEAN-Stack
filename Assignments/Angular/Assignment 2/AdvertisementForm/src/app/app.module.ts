import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { AdvertisementFormComponent } from './advertisement-form/advertisement-form.component';
import { HttpClientModule } from '@angular/common/http';
import { AdvertismentTableComponent } from './advertisment-table/advertisment-table.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { Search } from './custom-pipe/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AdvertisementFormComponent,
    AdvertismentTableComponent,
    EditProductComponent,
    Search
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
