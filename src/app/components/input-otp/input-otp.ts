import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputOtpModule } from 'primeng/inputotp';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InputOtpModule, FormsModule],
  templateUrl: './input-otp.html',
})
export class App {
  value: any;
}