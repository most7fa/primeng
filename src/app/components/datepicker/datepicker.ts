import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DatePickerModule, FormsModule],
  templateUrl: './datepicker.html',
})
export class App {
  date: Date | undefined;
}