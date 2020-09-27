import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { POST_ORDER_URL } from 'src/app/shared/url.config';
import { Order } from 'src/app/models/order.model';
import { Observable } from 'rxjs';

const createOrderUrl = POST_ORDER_URL;

@Injectable()
export class OrderService {
  
  constructor(private http: HttpClient) { 

  }

  createOrder(order : Order) : Observable<Order> {
    return this.http.post<Order>(createOrderUrl,order);
  }
}