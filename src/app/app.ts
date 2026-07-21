import { Component } from '@angular/core';
import { Check } from '@primeicons/angular/check';
import { Times } from '@primeicons/angular/times';
import { Search } from '@primeicons/angular/search';
import { User } from '@primeicons/angular/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Check, Times, Search, User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}