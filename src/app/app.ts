import { Component } from '@angular/core';
import { FileUploadComponent } from './components/file-upload/file-upload';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FileUploadComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}