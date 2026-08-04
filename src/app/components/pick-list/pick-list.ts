import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PickListModule } from 'primeng/picklist';

@Component({
  selector: 'app-pick-list',
  standalone: true,
  imports: [PickListModule, FormsModule],
  templateUrl: './pick-list.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class PickListComponent {

  source = [
    { name: 'Laptop' },
    { name: 'Keyboard' },
    { name: 'Mouse' },
    { name: 'Monitor' },
    { name: 'Printer' }
  ];

  target: any[] = [];

}