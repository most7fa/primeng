import { Component } from '@angular/core';
import { TreeModule } from 'primeng/tree';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-tree',
  standalone: true,
  imports: [TreeModule],
  templateUrl: './tree.html',
  styleUrl: './tree.css'
})
export class Tree {
  files: TreeNode[] = [
    {
      label: 'Documents',
      expanded: true,
      children: [
        {
          label: 'Work',
          children: [
            { label: 'Report.pdf' },
            { label: 'Presentation.pptx' }
          ]
        },
        {
          label: 'Personal',
          children: [
            { label: 'Photo.png' },
            { label: 'Resume.docx' }
          ]
        }
      ]
    }
  ];
}