import { Component, signal } from '@angular/core';
import { PIcon } from '@primeicons/angular/p-icon';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PIcon, ButtonModule],
  templateUrl: './programmatic.html',
})
export class App {
  icons = ['home', 'star', 'heart', 'bell'];

  selectedIcon = signal<string>('home');
}