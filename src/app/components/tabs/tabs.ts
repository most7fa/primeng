import { Component } from '@angular/core';
import { TabsModule } from 'primeng/tabs';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [TabsModule],
  templateUrl: './tabs.html',
  styleUrl: './tabs.css'
})
export class Tabs {}