import { Component } from '@angular/core';

@Component({
  selector: 'app-accessible',
  standalone: true,
  templateUrl: './accessible.html',
})
export class AccessibleComponent {
  checked = false;

  toggle() {
    this.checked = !this.checked;
  }

  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.toggle();
    }
  }
}
