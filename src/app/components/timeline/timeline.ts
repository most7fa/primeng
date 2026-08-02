import { Component } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [TimelineModule],
  templateUrl: './timeline.html',
  styleUrl: './timeline.css'
})
export class Timeline {
  events = [
    { status: 'Ordered', date: '10/08/2026' },
    { status: 'Shipped', date: '11/08/2026' },
    { status: 'Out for Delivery', date: '12/08/2026' },
    { status: 'Delivered', date: '13/08/2026' }
  ];
}