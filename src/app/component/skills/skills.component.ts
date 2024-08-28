import { Component, ElementRef, Input, QueryList, ViewChildren } from '@angular/core';
import { ThemeService } from '../../service/theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  @Input() skills?: { [key: string]: string[] };
  @ViewChildren('image') images!: QueryList<ElementRef>;
  mode!: string;
  inView: boolean = false;

  private $modeSubscription?: Subscription;

  constructor(
    private themeService: ThemeService) {
    this.$modeSubscription = this.themeService.getModeObservable().subscribe(mode => this.changeMode(mode))
    this.changeMode(themeService.isDarkMode())
  }

  ngOnDestroy(): void {
    if (this.$modeSubscription)
      this.$modeSubscription.unsubscribe();
  }

  changeMode(mode: boolean) {
    this.mode = mode ? "dark" : "light";
  }

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.inView = true
        }
      });
    });

    this.images.forEach((image) => {
      observer.observe(image.nativeElement);
    })
  }
}
