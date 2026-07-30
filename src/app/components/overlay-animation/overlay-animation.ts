import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-overlay-animation',
  standalone: true,
  imports: [FormsModule, SelectModule],
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './overlay-animation.html',
})
export class OverlayAnimationComponent {
  cities = [
    { name: 'Cairo' },
    { name: 'Alexandria' },
    { name: 'Menofia' },
    { name: 'Sharm Elshakh' },
    { name: 'Mansoura' }
  ];

  selectedCity: any;
}
