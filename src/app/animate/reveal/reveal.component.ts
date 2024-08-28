import {
  Component,
  Output,
  Input,
  ElementRef,
  AfterViewInit,
  EventEmitter,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-reveal',
  templateUrl: './reveal.component.html',
  styleUrl: './reveal.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class RevealComponent implements AfterViewInit, OnChanges {
  @Output() inView = new EventEmitter<boolean>();
  @Input() parent?: Element;
  private observer?: IntersectionObserver;

  constructor(private el: ElementRef) {
    this.inView.emit(false)
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['parent'] && !changes['parent'].firstChange) {
      this.updateObserver();
    }
  }

  ngAfterViewInit(): void {
    this.updateObserver()
  }
  private updateObserver() {
    if (this.observer) {
      this.observer.disconnect();
    }
    const root = this.parent || null;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.inView.emit(true)
            this.observer?.disconnect();
          }
        });
      },
      {
        root: root,
      }
    );

    if (this.el.nativeElement)
      this.observer.observe(this.el.nativeElement);
  }
}
