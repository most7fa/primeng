import { Component } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [DrawerModule, ButtonModule],
  templateUrl: './drawer.html'
})
export class Drawer {
  visible = false;
}