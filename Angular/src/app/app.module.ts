import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterimagesPipe } from './components/menu/pipe/filterImages.pipe';
import { OrderComponent } from './components/order/order.component';
import { IngredientComponent } from './components/ingredient/ingredient.component';
import { MakePizzaComponent } from './components/make-pizza/make-pizza.component';


import {MatListModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FilterimagesPipe,
    OrderComponent,
    IngredientComponent,    
    MakePizzaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatListModule   
  ],
  providers: [FilterimagesPipe],
  bootstrap: [AppComponent]  
})
export class AppModule { }
