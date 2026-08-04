import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ScrollTopModule } from 'primeng/scrolltop';

@Component({
  selector: 'app-scroll-top',
  standalone: true,
  imports: [ScrollTopModule],
  templateUrl: './scroll-top.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class ScrollTopComponent {}