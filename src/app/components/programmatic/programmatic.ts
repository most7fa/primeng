import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { PIcon } from '@primeicons/angular/p-icon';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-programmatic',
  standalone: true,
  imports: [PIcon, ButtonModule],
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './programmatic.html',
})
export class ProgrammaticComponent {
  icons = ['home', 'star', 'heart', 'bell'];

  selectedIcon = signal<string>('home');
}
