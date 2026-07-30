import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { FileUploadModule, FileUploadEvent } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [FileUploadModule, ButtonModule, ToastModule],
  providers: [MessageService],
  templateUrl: './file-upload.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './file-upload.css'
})
export class FileUploadComponent {
  private messageService = inject(MessageService);

  onUpload(event: FileUploadEvent) {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'File Uploaded'
    });
  }
}
