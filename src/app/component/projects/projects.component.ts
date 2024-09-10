import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ProjectsComponent {
  @Input() projects!: {
    name: string,
    role: string,
    path: string,
    year: number,
    description: string,
    stack: string[],
  }[]
}
