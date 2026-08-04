import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TerminalModule } from 'primeng/terminal';
import { TerminalService } from 'primeng/terminal';

@Component({
  selector: 'app-terminal',
  standalone: true,
  imports: [TerminalModule],
  providers: [TerminalService],
  templateUrl: './terminal.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class TerminalComponent {

  constructor(private terminalService: TerminalService) {
    this.terminalService.commandHandler.subscribe((command) => {
      const text = command.trim();

      switch (text) {
        case 'help':
          this.terminalService.sendResponse('Commands: help, date, hello');
          break;

        case 'hello':
          this.terminalService.sendResponse('Hello Mostafa 👋');
          break;

        case 'date':
          this.terminalService.sendResponse(new Date().toLocaleString());
          break;

        default:
          this.terminalService.sendResponse('Unknown command');
      }
    });
  }

}