import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-button-icons',
  standalone: true,
  imports: [ButtonModule],
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './button-icons.html',
})
export class ButtonIconsComponent {}
