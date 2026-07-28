import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SelectModule, FormsModule],
  templateUrl: './custom-icon-image.html',
})
export class App {
  cities = [
    { name: 'Cairo' },
    { name: 'Alexandria' },
    { name: 'Mansoura' }
  ];

  selectedCity: any;
}