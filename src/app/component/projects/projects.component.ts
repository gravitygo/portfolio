import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  @Input() projects!: {
    name: string,
    role: string,
    year: number,
    description: string,
    stack: string[],
  }[]
}
