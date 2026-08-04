import { Component, ChangeDetectionStrategy } from '@angular/core';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-organization-chart',
  standalone: true,
  imports: [OrganizationChartModule],
  templateUrl: './organization-chart.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class OrganizationChartComponent {

  data: TreeNode[] = [
    {
      label: 'CEO',
      expanded: true,
      children: [
        {
          label: 'Sales Manager',
          expanded: true,
          children: [
            { label: 'Sales 1' },
            { label: 'Sales 2' }
          ]
        },
        {
          label: 'IT Manager',
          expanded: true,
          children: [
            { label: 'Developer 1' },
            { label: 'Developer 2' }
          ]
        },
        {
          label: 'HR Manager'
        }
      ]
    }
  ];

}