import { Component } from '@angular/core';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [StepperModule, ButtonModule],
  templateUrl: './stepper.html',
  styleUrl: './stepper.css'
})
export class Stepper {}