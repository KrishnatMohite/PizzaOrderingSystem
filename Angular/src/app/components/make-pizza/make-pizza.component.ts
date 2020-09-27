import { Component, OnInit, ViewChild } from '@angular/core';
import { OrderComponent } from '../order/order.component';
import { Menu } from 'src/app/models/menu.model';
import { OrderType } from 'src/app/shared/app.constant';

@Component({
  selector: 'app-make-pizza',
  templateUrl: './make-pizza.component.html',
  styleUrls: ['./make-pizza.component.scss']
})
export class MakePizzaComponent implements OnInit {
  // Start : variable declaration 
  orderItems:Menu[];
  @ViewChild(OrderComponent)
  private orderComponent: OrderComponent;
  orderTypeCustome = OrderType.Custome;
  // End : variable declaration 
  constructor() { }
  // Start : Lifecycle Events
  ngOnInit() {

  }
  // End : Lifecycle Events
  // Start : Events
  onSelectedList(item) {
    this.orderItems = item;
    setTimeout(()=> {
      this.orderComponent.calculateTotal();
    },0);    
  }
  // End : Events

}
