import { Component, inject } from '@angular/core';
import { FileUploadModule, FileUploadEvent } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FileUploadModule, ButtonModule, ToastModule],
  providers: [MessageService],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private messageService = inject(MessageService);

  onUpload(event: FileUploadEvent) {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'File Uploaded'
    });
  }
}