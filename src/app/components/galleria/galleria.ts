import { Component } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-galleria',
  standalone: true,
  imports: [GalleriaModule],
  templateUrl: './galleria.html',
  styleUrl: './galleria.css'
})
export class Galleria {
  images = [
    {
      itemImageSrc: 'https://picsum.photos/id/1015/900/500',
      thumbnailImageSrc: 'https://picsum.photos/id/1015/150/100',
      alt: 'Image 1',
      title: 'Image 1'
    },
    {
      itemImageSrc: 'https://picsum.photos/id/1016/900/500',
      thumbnailImageSrc: 'https://picsum.photos/id/1016/150/100',
      alt: 'Image 2',
      title: 'Image 2'
    },
    {
      itemImageSrc: 'https://picsum.photos/id/1018/900/500',
      thumbnailImageSrc: 'https://picsum.photos/id/1018/150/100',
      alt: 'Image 3',
      title: 'Image 3'
    }
  ];

  responsiveOptions = [
    {
      breakpoint: '991px',
      numVisible: 4
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];
}