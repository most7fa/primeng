import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-float-label',
  standalone: true,
  imports: [FloatLabelModule, InputTextModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './float-label.html',
})
export class FloatLabelComponent {
  value: string | undefined;
}
