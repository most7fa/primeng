import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SplitterModule } from 'primeng/splitter';

@Component({
  selector: 'app-splitter',
  standalone: true,
  imports: [SplitterModule],
  templateUrl: './splitter.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class SplitterComponent {}