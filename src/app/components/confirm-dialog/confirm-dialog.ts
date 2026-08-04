import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [ButtonModule, ConfirmDialogModule],
  providers: [ConfirmationService],
  templateUrl: './confirm-dialog.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class ConfirmDialogComponent {

  private confirmationService = inject(ConfirmationService);

  confirm(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure you want to continue?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        console.log('Accepted');
      },
      reject: () => {
        console.log('Rejected');
      }
    });
  }
}