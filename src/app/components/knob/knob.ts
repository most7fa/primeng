import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KnobModule } from 'primeng/knob';

@Component({
  selector: 'app-knob',
  standalone: true,
  imports: [KnobModule, FormsModule],
  templateUrl: './knob.html',
})
export class KnobComponent {
  value: number = 50;
}
