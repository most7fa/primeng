import { Component } from '@angular/core';
import { ButtonIconsComponent } from './components/button-icons/button-icons';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonIconsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}