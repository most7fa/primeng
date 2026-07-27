import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardModule, ButtonModule, InputTextModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}