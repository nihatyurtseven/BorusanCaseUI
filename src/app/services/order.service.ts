import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../models/order';
import { OrderResult } from '../models/orderResult';
import { OrderStatuDto } from '../models/orderStatuDto';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  url="Order";
  constructor(private http: HttpClient) { }

  getOrders():Observable<Order[]>{
    return this.http.get<Order[]>(`${environment.apiUrl}/${this.url}`);
  }

  updateOrderStatu(orderStatuUpdate:OrderStatuDto):Observable<OrderResult>{
    return this.http.post<OrderResult>(`${environment.apiUrl}/${this.url}/updateOrderStatu`,orderStatuUpdate);
  }
}
