import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './accessible-checkbox.html',
})
export class App {
  checked = false;

  toggle() {
    this.checked = !this.checked;
  }

  updateParentVisuals() {
    console.log('Focus/Blur');
  }
}