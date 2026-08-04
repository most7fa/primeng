import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InplaceModule } from 'primeng/inplace';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-inplace',
  standalone: true,
  imports: [InplaceModule, InputTextModule, FormsModule],
  templateUrl: './inplace.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class InplaceComponent {
  text = 'Click here to edit';
}