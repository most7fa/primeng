import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RatingModule, FormsModule],
  templateUrl: './rating.html',
})
export class App {
  value: number = 3.5;
}