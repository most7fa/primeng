import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [RatingModule, FormsModule],
  templateUrl: './rating.html',
})
export class RatingComponent {
  value: number = 3.5;
}
