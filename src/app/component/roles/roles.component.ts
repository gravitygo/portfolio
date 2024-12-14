import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss',
})
export class RolesComponent {
  @Input() roles: {
    date: string;
    role: string;
    company: string;
    location: string;
  }[] = [];
  @ViewChild('roleSection') observedElement!: ElementRef;
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
