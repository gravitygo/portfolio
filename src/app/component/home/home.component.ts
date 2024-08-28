import { Component, ViewEncapsulation, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  content = {
    "fullName": `Chyle Andrei Lee`,
    "role": `BSIT Student`,
    "paragraph": `Hello! I'm a fourth-year student at De La Salle University. I specialize in full stack web development, primarily using Angular for the frontend and Node.js for the backend. I love creating dynamic and responsive web applications, as well as analyzing and interpreting data to derive meaningful insights.`
  }

  socials = [
    {
      "link": "https://www.facebook.com/GravityGo16",
      "icon": "ic--baseline-facebook",
      "name": "facebook"
    },
    {
      "link": "https://discord.com/users/326675091188613123",
      "icon": "ic--baseline-discord",
      "name": "discord"

    },
    {
      "link": "https://www.linkedin.com/in/chyle-lee/",
      "icon": "mdi--linkedin",
      "name": "linkedin"

    },
    {
      "link": "https://github.com/gravitygo",
      "icon": "mingcute--github-fill",
      "name": "github"

    },
    {
      "link": "https://mail.google.com/mail/u/0/?fs=1&to=chyle.andre.lee@gmail.com&su=%22Let%27s+Connect!%22&tf=cm",
      "icon": "material-symbols--mail",
      "name": "mail"

    },
  ]

  nameText = '';
  typingSpeed = 100; // Adjust typing speed here (milliseconds per character)
  inView = false;

  ngOnInit() {
    this.typeText(this.content.fullName, 'nameText')
  }

  typeText(text: string, target: 'nameText') {
    let index = 0;
    const typingInterval = setInterval(() => {
      this[target] += text[index];
      index++;
      if (index === text.length) {
        clearInterval(typingInterval);
      }
    }, this.typingSpeed);
  }

  setInView(inView: boolean) {
    this.inView = inView;
  }
}
