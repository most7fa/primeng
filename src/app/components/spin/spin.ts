import { Component } from '@angular/core';
import { Spinner } from '@primeicons/angular/spinner';

@Component({
  selector: 'app-spin',
  standalone: true,
  imports: [Spinner],
  templateUrl: './spin.html',
})
export class SpinComponent {}
