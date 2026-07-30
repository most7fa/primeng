import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';

@Component({
  selector: 'app-radio-button',
  standalone: true,
  imports: [RadioButtonModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './radio-button.html',
})
export class RadioButtonComponent {
  ingredient: string | undefined;
}
