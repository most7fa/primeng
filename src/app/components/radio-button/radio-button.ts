import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RadioButtonModule, FormsModule],
  templateUrl: './radio-button.html',
})
export class App {
  ingredient: string | undefined;
}