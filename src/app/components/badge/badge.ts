import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [BadgeModule, ButtonModule],
  templateUrl: './badge.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class BadgeComponent {}