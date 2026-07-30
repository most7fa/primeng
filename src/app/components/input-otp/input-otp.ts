import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputOtpModule } from 'primeng/inputotp';

@Component({
  selector: 'app-input-otp',
  standalone: true,
  imports: [InputOtpModule, FormsModule],
  templateUrl: './input-otp.html',
})
export class InputOtpComponent {
  value: any;
}
