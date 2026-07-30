import { Component } from '@angular/core';

@Component({
  selector: 'app-clicked',
  standalone: true,
  templateUrl: './clicked.html',
})
export class ClickedComponent {

  onButtonClick(event: MouseEvent) {
    console.log('Clicked', event);
    alert('Clicked');
  }

  onKeyDown(event: KeyboardEvent) {
    console.log('Key:', event.key);

    if (event.key === 'Enter' || event.key === ' ') {
      alert('Keyboard Click');
    }
  }

}
