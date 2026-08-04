import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MegaMenuModule } from 'primeng/megamenu';
import { MegaMenuItem } from 'primeng/api';

@Component({
  selector: 'app-mega-menu',
  standalone: true,
  imports: [MegaMenuModule],
  templateUrl: './mega-menu.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class MegaMenuComponent {

  items: MegaMenuItem[] = [
    {
      label: 'Products',
      icon: 'pi pi-box',
      items: [
        [
          {
            label: 'Electronics',
            items: [
              { label: 'Laptops' },
              { label: 'Phones' },
              { label: 'Tablets' }
            ]
          }
        ],
        [
          {
            label: 'Fashion',
            items: [
              { label: 'Men' },
              { label: 'Women' },
              { label: 'Kids' }
            ]
          }
        ]
      ]
    },
    {
      label: 'Orders',
      icon: 'pi pi-shopping-cart'
    },
    {
      label: 'Customers',
      icon: 'pi pi-users'
    },
    {
      label: 'Settings',
      icon: 'pi pi-cog'
    }
  ];

}