import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [BreadcrumbModule],
  templateUrl: './breadcrumb.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class BreadcrumbComponent {

  items: MenuItem[] = [
    { label: 'Home', icon: 'pi pi-home' },
    { label: 'Products' },
    { label: 'Electronics' },
    { label: 'Laptops' }
  ];

}