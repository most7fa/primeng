import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-panel-menu',
  standalone: true,
  imports: [PanelMenuModule],
  templateUrl: './panel-menu.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class PanelMenuComponent {

  items: MenuItem[] = [
    {
      label: 'Dashboard',
      icon: 'pi pi-home'
    },
    {
      label: 'Products',
      icon: 'pi pi-box',
      items: [
        {
          label: 'All Products'
        },
        {
          label: 'Add Product'
        }
      ]
    },
    {
      label: 'Orders',
      icon: 'pi pi-shopping-cart'
    },
    {
      label: 'Settings',
      icon: 'pi pi-cog'
    }
  ];

}