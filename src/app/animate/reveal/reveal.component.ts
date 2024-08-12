import {
  Component,
  Output,
  ElementRef,
  OnInit,
  AfterViewInit,
  EventEmitter,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-reveal',
  templateUrl: './reveal.component.html',
  styleUrl: './reveal.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class RevealComponent implements OnInit, AfterViewInit {
  @Output() inView = new EventEmitter<boolean>();

  constructor(private el: ElementRef) {
    this.inView.emit(false)
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.inView.emit(true)
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(this.el.nativeElement);
  }
}
