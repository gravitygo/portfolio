import { Component, ViewEncapsulation, HostListener } from '@angular/core';
import { ThemeService } from '../../service/theme.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class NavBarComponent {
  private menu: boolean;
  private scrolled: boolean;

  links = [
    { link: 'About me', fragment: 'about' },
    { link: 'Projects', fragment: 'project-section' },
    { link: 'Skills', fragment: 'skill-section' },
    { link: 'Experience', fragment: 'role-section' },
  ];
  constructor(
    private viewportScroller: ViewportScroller,
    private themeService: ThemeService,
  ) {
    this.scrolled = false;
    this.menu = false;
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const offset =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    this.scrolled = offset > 1; // Adjust the scroll offset as needed
  }

  getScrolled(): boolean {
    return this.scrolled;
  }

  toggleDarkMode(): void {
    this.themeService.toggleDarkMode();
  }
  getMenu(): boolean {
    return this.menu;
  }
  toggleMenu(): void {
    this.menu = !this.menu;
  }

  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
}
