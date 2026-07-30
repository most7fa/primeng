import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-card-form',
  standalone: true,
  imports: [CardModule, ButtonModule, InputTextModule],
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './card-form.html',
})
export class CardFormComponent {}
