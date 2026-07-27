import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RatingModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  value: number = 3.5;
}