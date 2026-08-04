import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ImageCompareModule } from 'primeng/imagecompare';

@Component({
  selector: 'app-image-compare',
  standalone: true,
  imports: [ImageCompareModule],
  templateUrl: './image-compare.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class ImageCompareComponent {}