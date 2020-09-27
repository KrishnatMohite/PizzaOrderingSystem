import { Component, OnInit,ViewChild, OnDestroy } from '@angular/core';
import { MenuService } from './service/menu.service';
import { Menu } from 'src/app/models/menu.model';
import { PizzaSize } from 'src/app/shared/app.constant';
import { OrderComponent } from '../order/order.component';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers:[MenuService]
})
export class MenuComponent implements OnInit,OnDestroy {
  // Start : variable declaration 
  menu : Menu[];
  pizzaSize: PizzaSize;
  orderItems: Menu[] = [];
  @ViewChild(OrderComponent)
  private orderComponent: OrderComponent;
  getMenuSubscription: Subscription;
  allSubscriptions: Subscription[] = []

  // End : variable declaration 

  constructor(private menuService: MenuService, private router: Router) { }

  // Start : Lifecycle Events
  ngOnInit() {
    this.getMenuSubscription = this.menuService.getMenu().pipe()
    .subscribe((data)=>{
        this.menu = data;
    });

    this.allSubscriptions.push(this.getMenuSubscription);
  }

  ngOnDestroy() {
    this.allSubscriptions.forEach((subscription) => subscription.unsubscribe())
  }
  // End : Lifecycle Events
  
  // Start : Private Method
  addItem(item) {
    this.orderItems.push(item);
    this.orderComponent.calculateTotal();
  }

  removeItem(item) {
    let index = this.orderItems.findIndex(m=>m.Id == item.Id);
    if(index >= 0) {
      this.orderItems.splice(index,1);
      this.orderComponent.calculateTotal();
    }
  }

  goToMakePizza() {
    this.router.navigateByUrl('/makePizza');
  }

  // End : Private Method 
  
}
