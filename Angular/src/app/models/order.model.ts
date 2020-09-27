import { VegNonVegtype, PizzaSize, OrderType, OrderStatus } from '../shared/app.constant';
import { Menu } from './menu.model';

export class Order {
    OrderId?: string;
    Item: Array<Menu>;
    Type: OrderType;    
    Status:OrderStatus;
    Total:number;
  }