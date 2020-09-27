import { VegNonVegtype, PizzaSize } from '../shared/app.constant';

export class Menu {
    Id: number;
    Name: string;
    Type: VegNonVegtype;
    Size:PizzaSize;
    Price:number;
  }