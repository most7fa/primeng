import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [RatingModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './rating.html',
})
export class RatingComponent {
  value: number = 3.5;
}
