import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './menubar.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class MenubarComponent {

  items: MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-home'
    },
    {
      label: 'Products',
      icon: 'pi pi-box',
      items: [
        {
          label: 'New'
        },
        {
          label: 'List'
        }
      ]
    },
    {
      label: 'Orders',
      icon: 'pi pi-shopping-cart'
    },
    {
      label: 'Users',
      icon: 'pi pi-users'
    }
  ];

}