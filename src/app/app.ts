import { Component } from '@angular/core';
import { CardFormComponent } from './components/card-form/card-form';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}