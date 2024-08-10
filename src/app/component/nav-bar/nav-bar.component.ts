import { Component, ViewEncapsulation, HostListener } from '@angular/core';
import { ThemeService } from '../../service/theme.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class NavBarComponent {
  private menu: boolean;
  private scrolled: boolean;

  links = [
    { link: "About me", nav: "/" },
    { link: "Experience", nav: "/experience" },
    { link: "Contact", nav: "/contact" }
  ]
  constructor(private themeService: ThemeService) {
    this.scrolled = false;
    this.menu = false;
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
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

}
