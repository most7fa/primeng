import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ScrollerModule } from 'primeng/scroller';
@Component({
  selector: 'app-virtual-scroller',
  standalone: true,
  imports: [ScrollerModule],
  templateUrl: './virtual-scroller.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class VirtualScrollerComponent {

  items = Array.from({ length: 10000 }, (_, i) => `Item #${i + 1}`);

}