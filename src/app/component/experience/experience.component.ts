import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ThemeService } from '../../service/theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ExperienceComponent implements OnInit, OnDestroy {
  inView = false;
  tabs = ["Skills", "Roles", "Projects"]
  mode!: string;

  skills = {
    "Language": ["c", "cs", "cpp", "css", "html", "java", "js", "kotlin", "lua", "php", "py", "ts"],
    "Framework & Tools": ["angular", "express", "flutter", "graphql", "hibernate", "jquery", "nextjs", "nodejs", "npm", "react", "spring", "sklearn", "tensorflow"],
    "Design & Api Tools": ["ai", "bootstrap", "figma", "materialui", "ps", "sass", "styledcomponents", "tailwind", "threejs"],
    "Databases": ["cassandra", "firebase", "mongodb", "mysql", "postgres", "sqlite", "supabase"],
    "Development & Other Tools": ["androidstudio", "aws", "azure", "docker", "flask", "gcp", "git", "github", "gitlab", "jenkins", "linux", "maven", "neovim", "nginx", "notion", "obsidian", "postman", "sublime", "vercel", "yarn"]
  }
  active = 0;
  private $modeSubscription?: Subscription;

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
