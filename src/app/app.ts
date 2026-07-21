import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
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