import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private url = "http://127.0.0.1:8000/"

  constructor(private http: HttpClient) { }

  getOrders() {
    return this.http.get(this.url + "api/orders")
  }
}
