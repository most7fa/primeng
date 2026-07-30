import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';

@Component({
  selector: 'app-select-button',
  standalone: true,
  imports: [SelectButtonModule, FormsModule],
  templateUrl: './select-button.html',
})
export class SelectButtonComponent {
  stateOptions = [
    { label: 'One-Way', value: 'one-way' },
    { label: 'Return', value: 'return' }
  ];

  value: string = 'one-way';
}
