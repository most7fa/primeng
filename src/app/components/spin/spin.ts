import { Component } from '@angular/core';
import { Spinner } from '@primeicons/angular/spinner';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Spinner],
  templateUrl: './spin.html',
})
export class App {}