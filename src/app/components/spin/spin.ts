import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Spinner } from '@primeicons/angular/spinner';

@Component({
  selector: 'app-spin',
  standalone: true,
  imports: [Spinner],
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './spin.html',
})
export class SpinComponent {}
