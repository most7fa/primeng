import { Component } from '@angular/core';
import { SpeedDialComponent } from './components/speed-dial/speed-dial';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SpeedDialComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {} 