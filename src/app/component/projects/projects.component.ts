import {
  Component,
  ElementRef,
  Input,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ProjectsComponent {
  @Input() projects!: {
    name: string;
    role: string;
    path: string;
    github: string;
    year: number;
    description: string;
    stack: string[];
  }[];
  @ViewChild('projectSection') observedElement!: ElementRef;
  inView = false;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.inView = true;
        }
      });
    });
    observer.observe(this.observedElement.nativeElement);
  }
}
