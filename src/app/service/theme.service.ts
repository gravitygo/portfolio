import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkMode: boolean;
  private $modeSubject: BehaviorSubject<boolean>;

  constructor() {
    if (localStorage.getItem('dark-mode') == null)
      localStorage.setItem('dark-mode', 'true');

    this.darkMode = localStorage.getItem('dark-mode') === 'true';
    this.$modeSubject = new BehaviorSubject<boolean>(this.isDarkMode());
    this.updateBodyClass();
  }

  toggleDarkMode(): void {
    this.darkMode = !this.darkMode;
    localStorage.setItem('dark-mode', this.darkMode.toString());
    this.updateBodyClass();
    this.$modeSubject.next(this.isDarkMode());
  }

  isDarkMode(): boolean {
    return this.darkMode;
  }

  updateBodyClass(): void {
    if (this.darkMode) document.body.classList.add('dark')
    else document.body.classList.remove('dark');
  }

  getModeObservable(): Observable<boolean> {
    return this.$modeSubject.asObservable();
  }
}
