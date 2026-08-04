import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [DialogModule, ButtonModule, FormsModule],
  templateUrl: './dialog.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class DialogComponent {

  visible = false;

  showDialog() {
    this.visible = true;
  }

}