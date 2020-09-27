import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Menu } from 'src/app/models/menu.model';
import { Order } from 'src/app/models/order.model';
import { OrderStatus, OrderType } from 'src/app/shared/app.constant';
import { OrderService } from './service/order.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  providers:[OrderService]
})
export class OrderComponent implements OnInit, OnDestroy {  
  // Start : variable declaration
  @Input()
  orderedItem : Menu[]
  totalBillAmt : number = 0;
  showOrderItems : boolean;
  @Input()
  orderType: OrderType = OrderType.Regular;
  showSize:boolean;
  postOrderSubscription: Subscription;
  allSubscriptions: Subscription[] = []
  // End : variable declaration
  constructor(private _orderservice: OrderService, private router: Router) { }
  // Start : Lifecycle Events
  ngOnInit() {
    this.calculateTotal();
    this.setShowFlag();    
  }

  ngOnDestroy() {
    this.allSubscriptions.forEach((subscription) => subscription.unsubscribe())
  }
  // End : Lifecycle Events
  // Start : Private Function
  setShowFlag() {
    if(this.orderType == OrderType.Custome) {
      this.showSize = false;
    } else {
      this.showSize = true;
    }
  }
  
  resetAllFields()  {
    this.orderedItem = [];
    this.totalBillAmt = 0;
    this.showOrderItems= false;
    this.router.navigateByUrl('/menu');
  }

  validatField() {
    if(this.orderType == OrderType.Custome) {
      let index = this.orderedItem.findIndex(o=>o.Name.toLowerCase().startsWith('crust'));
      if(index ==-1) {
        alert('Please select crust from list');
        return false;
      }
    }
    return true;
  }
  // End : Private Function
  // Start : Public Function (called from another component)
  calculateTotal() {    
    if(this.orderedItem && this.orderedItem.length > 0) {
      this.showOrderItems= true;
      this.totalBillAmt =  this.orderedItem.map(item => item.Price).reduce(function(prev, curr)
                            {
                              return prev + curr;
                            });      
    } else {
      this.totalBillAmt = 0;
      this.showOrderItems= false;
    }
  }
  // End : Private Function
  // Start : Events
  onConfirmOrder() {
    if(this.validatField() == false) { return;}
    let order:Order = new Order();
    order.Item = this.orderedItem;
    order.Status = OrderStatus.Open;
    order.Total = this.totalBillAmt;
    order.Type = this.orderType;

    this.postOrderSubscription = this._orderservice.createOrder(order).pipe()
    .subscribe((data:Order) => {
        alert("Your order Number Is : " + data.OrderId);
        this.resetAllFields();        
    });
    this.allSubscriptions.push(this.postOrderSubscription);
  }
  // End : Events
  
}
