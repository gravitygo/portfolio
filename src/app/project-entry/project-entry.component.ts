import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-entry',
  templateUrl: './project-entry.component.html',
  styleUrl: './project-entry.component.scss'
})
export class ProjectEntryComponent {
  @Input() project!: {
    name: string,
    role: string,
    year: number,
    description: string,
    stack: string[],
  }
  @Input() index: number = 0;

}
