import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [AccordionModule],
  templateUrl: './accordion.html',
  styleUrl: './accordion.css'
})
export class Accordion {}