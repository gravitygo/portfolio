import { Component, OnInit, OnDestroy, ViewEncapsulation, HostListener, ViewChild, ElementRef } from '@angular/core';
import { ThemeService } from '../../service/theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ExperienceComponent implements OnInit, OnDestroy {
  private $modeSubscription?: Subscription;
  inView = false;
  tabs = ["Skills", "Roles", "Projects"]
  mode!: string;
  active = 0;

  skills = {
    "Language": ["c", "cs", "cpp", "css", "html", "java", "js", "kotlin", "lua", "php", "py", "ts"],
    "Framework & Tools": ["angular", "express", "flutter", "graphql", "hibernate", "jquery", "nextjs", "nodejs", "npm", "react", "spring", "sklearn", "tensorflow"],
    "Design & Api Tools": ["ai", "bootstrap", "figma", "materialui", "ps", "sass", "styledcomponents", "tailwind", "threejs"],
    "Databases": ["cassandra", "firebase", "mongodb", "mysql", "postgres", "sqlite", "supabase"],
    "Development & Other Tools": ["androidstudio", "aws", "azure", "docker", "flask", "gcp", "git", "github", "gitlab", "jenkins", "linux", "maven", "neovim", "nginx", "notion", "obsidian", "postman", "sublime", "vercel", "yarn"]
  };

  roles = [
    {
      date: "Sept 2023 - Jul 2024",
      role: "Lead Software Developer",
      company: "Capstone",
      location: "Manila, Metro Manila",
    },
    {
      date: "Sept 2023 - Dec 2023",
      role: "Junior Software Developer",
      company: "Navitaire, an Amadeus Company",
      location: "Taguig, Metro Manila",
    },
    {
      date: "Aug 2023 - Oct 2023",
      role: "Mobile Developer",
      company: "PlantMate",
      location: "Manila, Metro Manila",
    },
    {
      date: "Apr 2023",
      role: "Finalist",
      company: "UP Algolympics",
      location: "Quezon, Metro Manila",
    },
    {
      date: "Jul 2022 - Sept 2022",
      role: "IT Intern",
      company: "Accenture Philippines",
      location: "Mandalyong, Metro Manila",
    },
    {
      date: "Apr 2022",
      role: "Finalist",
      company: "UP Algolympics",
      location: "Quezon, Metro Manila",
    },
    {
      date: "Jul 2021 - Sept 2022",
      role: "Tutor",
      company: "Peer Tutors Society - De La Salle University Manila",
      location: "Manila, Metro Manila",
    },
    {
      date: "Mar 2021 - Sept 2021",
      role: "Activities Executive",
      company: "De La Salle University Student Government - College Batch 2T24",
      location: "Manila, Metro Manila",
    },
  ];

  projects = [
    {
      name: "Practrack",
      role: "Fullstack Developer",
      year: 2023,
      path: "Practrack",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      stack: [
        "Kotlin",
        "Figma"
      ],
    },
    {
      name: "ProfsToPick",
      role: "Fullstack Developer",
      year: 2023,
      path: "ProfsToPick",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      stack: [
        "Kotlin",
        "Figma"
      ],
    },
    {
      name: "PlantMate",
      role: "Fullstack Developer",
      year: 2023,
      path: "PlantMate",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      stack: [
        "Kotlin",
        "Figma"
      ],
    },
    {
      name: "Animal Chess",
      role: "Fullstack Developer",
      year: 2023,
      path: "AnimalChess",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      stack: [
        "Kotlin",
        "Figma"
      ],
    },
    {
      name: "Diner",
      role: "Fullstack Developer",
      year: 2023,
      path: "Diner",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      stack: [
        "Kotlin",
        "Figma"
      ],
    },
    {
      name: "GravitySmash",
      role: "Fullstack Developer",
      year: 2023,
      path: "GravitySmash",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      stack: [
        "Kotlin",
        "Figma"
      ],
    },
  ]
  constructor(private themeService: ThemeService) {
    this.changeMode(themeService.isDarkMode())
  }

  changeMode(mode: boolean) {
    this.mode = mode ? "dark" : "light";
  }

  ngOnInit(): void {
    this.$modeSubscription = this.themeService.getModeObservable().subscribe(mode => this.changeMode(mode))
  }

  ngOnDestroy(): void {
    if (this.$modeSubscription)
      this.$modeSubscription.unsubscribe();
  }

  setInView(inView: boolean) {
    this.inView = inView;
  }

  changeTab(tab: number) {
    this.active = tab
  }
}
