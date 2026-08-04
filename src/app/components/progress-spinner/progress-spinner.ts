import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-progress-spinner',
  standalone: true,
  imports: [ProgressSpinnerModule],
  templateUrl: './progress-spinner.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class ProgressSpinnerComponent {}