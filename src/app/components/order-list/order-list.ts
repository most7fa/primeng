import { Component, ChangeDetectionStrategy } from '@angular/core';
import { OrderListModule } from 'primeng/orderlist';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [OrderListModule],
  templateUrl: './order-list.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class OrderListComponent {

  products = [
    { name: 'Laptop', price: '$1200' },
    { name: 'Keyboard', price: '$80' },
    { name: 'Mouse', price: '$40' },
    { name: 'Monitor', price: '$350' },
    { name: 'Headset', price: '$120' }
  ];

}