import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, SelectModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  cities = [
    { name: 'Cairo' },
    { name: 'Alexandria' },
    { name: 'Menofia' },
    { name: 'Sharm Elshakh' },
    { name: 'Mansoura' }
  ];

  selectedCity: any;
}