import { Component } from '@angular/core';

@Component({
  selector: 'app-accessible-checkbox',
  standalone: true,
  templateUrl: './accessible-checkbox.html',
})
export class AccessibleCheckboxComponent {
  checked = false;

  toggle() {
    this.checked = !this.checked;
  }

  updateParentVisuals() {
    console.log('Focus/Blur');
  }
}
