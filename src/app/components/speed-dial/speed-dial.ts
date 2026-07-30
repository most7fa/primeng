import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { SpeedDialModule } from 'primeng/speeddial';
import { ToastModule } from 'primeng/toast';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-speed-dial',
  standalone: true,
  imports: [SpeedDialModule, ToastModule],
  providers: [MessageService],
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './speed-dial.html',
})
export class SpeedDialComponent implements OnInit {
  private messageService = inject(MessageService);

  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        icon: 'pi pi-pencil',
        command: () =>
          this.messageService.add({
            severity: 'info',
            summary: 'Add',
            detail: 'Data Added'
          })
      },
      {
        icon: 'pi pi-refresh',
        command: () =>
          this.messageService.add({
            severity: 'success',
            summary: 'Update',
            detail: 'Data Updated'
          })
      },
      {
        icon: 'pi pi-trash',
        command: () =>
          this.messageService.add({
            severity: 'error',
            summary: 'Delete',
            detail: 'Data Deleted'
          })
      },
      {
        icon: 'pi pi-upload'
      },
      {
        icon: 'pi pi-external-link',
        url: 'https://angular.dev',
        target: '_blank'
      }
    ];
  }
}
