import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-project-entry',
  templateUrl: './project-entry.component.html',
  styleUrl: './project-entry.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ProjectEntryComponent {
  @Input() project!: {
    name: string,
    role: string,
    year: number,
    path: string,
    description: string,
    stack: string[],
  }
  @Input() index: number = 0;

}
