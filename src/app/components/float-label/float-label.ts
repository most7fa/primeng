import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FloatLabelModule, InputTextModule, FormsModule],
  templateUrl: './float-label.html',
})
export class App {
  value: string | undefined;
}