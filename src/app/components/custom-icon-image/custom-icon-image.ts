import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-custom-icon-image',
  standalone: true,
  imports: [SelectModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './custom-icon-image.html',
})
export class CustomIconImageComponent {
  cities = [
    { name: 'Cairo' },
    { name: 'Alexandria' },
    { name: 'Mansoura' }
  ];

  selectedCity: any;
}
