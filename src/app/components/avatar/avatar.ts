import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-avatar',
  standalone: true,
 imports: [AvatarModule],
 templateUrl: './avatar.html',
 changeDetection: ChangeDetectionStrategy.Eager
})
export class AvatarComponent {}