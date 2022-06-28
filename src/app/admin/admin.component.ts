import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  orders: any;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.getOrders()
  }

  getOrders() {
    this.orderService
      .getOrders()
      .subscribe({
        next: (orders) => {
          this.orders = orders
        },
        error: (err: Response) => {
          console.log(err)
        }
      })
  }

}
