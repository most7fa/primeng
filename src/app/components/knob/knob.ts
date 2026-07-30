import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KnobModule } from 'primeng/knob';

@Component({
  selector: 'app-knob',
  standalone: true,
  imports: [KnobModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './knob.html',
})
export class KnobComponent {
  value: number = 50;
}
