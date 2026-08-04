import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';

@Component({
  selector: 'app-multi-select',
  standalone: true,
  imports: [MultiSelectModule, FormsModule],
  templateUrl: './multi-select.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class MultiSelectComponent {

  cities = [
    { name: 'Cairo' },
    { name: 'Alexandria' },
    { name: 'Giza' },
    { name: 'Mansoura' },
    { name: 'Aswan' }
  ];

  selectedCities: any[] = [];

}