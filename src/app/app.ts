import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SliderModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  value: number = 50;
}