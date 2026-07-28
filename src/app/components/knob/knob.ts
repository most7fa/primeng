import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KnobModule } from 'primeng/knob';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [KnobModule, FormsModule],
  templateUrl: './knob.html',
})
export class App {
  value: number = 50;
}