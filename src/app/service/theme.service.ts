import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkMode: boolean;

  constructor() {
    this.darkMode = localStorage.getItem('dark-mode') === 'true';
    this.updateBodyClass();
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    localStorage.setItem('dark-mode', this.darkMode.toString());
    this.updateBodyClass();
  }

  isDarkMode(): boolean {
    return this.darkMode;
  }

  updateBodyClass() {
    if (this.darkMode) document.body.classList.add('dark')
    else document.body.classList.remove('dark');
  }
}
