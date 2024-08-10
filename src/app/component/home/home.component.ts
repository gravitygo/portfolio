import { Component, ViewEncapsulation, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  fullName = "Chyle Andrei Lee";
  role = "BSIT Student";
  nameText = '';
  roleText = '';
  typingSpeed = 100; // Adjust typing speed here (milliseconds per character)

  ngOnInit() {
    this.typeText(this.fullName, 'nameText', () => {
      this.typeText(this.role, 'roleText');
    });
  }

  typeText(text: string, target: 'nameText' | 'roleText', callback?: () => void) {
    let index = 0;
    const typingInterval = setInterval(() => {
      this[target] += text[index];
      index++;
      if (index === text.length) {
        clearInterval(typingInterval);
        if (callback) {
          callback();
        }
      }
    }, this.typingSpeed);
  }
}
