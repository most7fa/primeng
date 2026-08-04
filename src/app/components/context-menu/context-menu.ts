import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ContextMenuModule } from 'primeng/contextmenu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-context-menu',
  standalone: true,
  imports: [ContextMenuModule],
  templateUrl: './context-menu.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class ContextMenuComponent {

  items: MenuItem[] = [
    {
      label: 'Edit',
      icon: 'pi pi-pencil'
    },
    {
      label: 'Copy',
      icon: 'pi pi-copy'
    },
    {
      label: 'Delete',
      icon: 'pi pi-trash'
    }
  ];

}