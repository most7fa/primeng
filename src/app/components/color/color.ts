import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Check } from '@primeicons/angular/check';
import { Times } from '@primeicons/angular/times';
import { Search } from '@primeicons/angular/search';
import { User } from '@primeicons/angular/user';

@Component({
  selector: 'app-color',
  standalone: true,
  imports: [Check, Times, Search, User],
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './color.html',
})
export class ColorComponent {}
