import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [SliderModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './slider.html',
})
export class SliderComponent {
  value: number = 50;
}
