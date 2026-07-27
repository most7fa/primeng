import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule, AutoCompleteCompleteEvent } from 'primeng/autocomplete';

interface Command {
  label: string;
  shortcut: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AutoCompleteModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  selectedCommand: Command | undefined;

  filteredCommands: Command[] = [];

  commands: Command[] = [
    { label: 'New File', shortcut: '⌘N' },
    { label: 'Open File', shortcut: '⌘O' },
    { label: 'Save', shortcut: '⌘S' },
    { label: 'Save As', shortcut: '⇧⌘S' },
    { label: 'Find', shortcut: '⌘F' },
    { label: 'Replace', shortcut: '⌘H' },
    { label: 'Go to Line', shortcut: '⌘G' },
    { label: 'Toggle Sidebar', shortcut: '⌘B' },
    { label: 'Split Editor', shortcut: '⌘\\' },
    { label: 'Close Tab', shortcut: '⌘W' }
  ];

  search(event: AutoCompleteCompleteEvent) {
    const query = event.query.toLowerCase();

    this.filteredCommands = query
      ? this.commands.filter(cmd =>
          cmd.label.toLowerCase().includes(query)
        )
      : [...this.commands];
  }
}