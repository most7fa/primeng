import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TextareaModule, FormsModule],
  templateUrl: './textarea.html',
})
export class App {
  value: string = '';
}