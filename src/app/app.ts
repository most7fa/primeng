import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DatePickerModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  date: Date | undefined;
}