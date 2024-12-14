import {
  Component,
  OnInit,
  OnDestroy,
  ViewEncapsulation,
  HostListener,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { ThemeService } from '../../service/theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ExperienceComponent implements OnInit, OnDestroy {
  private $modeSubscription?: Subscription;
  inView = false;
  tabs = ['Skills', 'Roles', 'Projects'];
  mode!: string;
  active = 0;

  skills = {
    Language: [
      'c',
      'cs',
      'cpp',
      'css',
      'html',
      'java',
      'js',
      'kotlin',
      'lua',
      'php',
      'py',
      'ts',
    ],
    'Framework & Tools': [
      'angular',
      'express',
      'flutter',
      'graphql',
      'hibernate',
      'jquery',
      'nextjs',
      'nodejs',
      'npm',
      'react',
      'spring',
      'sklearn',
      'tensorflow',
    ],
    'Design & Api Tools': [
      'ai',
      'bootstrap',
      'figma',
      'materialui',
      'ps',
      'sass',
      'styledcomponents',
      'tailwind',
      'threejs',
    ],
    Databases: [
      'cassandra',
      'firebase',
      'mongodb',
      'mysql',
      'postgres',
      'sqlite',
      'supabase',
    ],
    'Development & Other Tools': [
      'androidstudio',
      'aws',
      'azure',
      'docker',
      'flask',
      'gcp',
      'git',
      'github',
      'gitlab',
      'jenkins',
      'linux',
      'maven',
      'neovim',
      'nginx',
      'notion',
      'obsidian',
      'postman',
      'sublime',
      'vercel',
      'yarn',
    ],
  };

  roles = [
    {
      date: 'Oct 2024 - Dec 2024',
      role: 'Local IT Intern',
      company: 'ING HUBS Philippines',
      location: 'Taguig, Metro Manila',
    },
    {
      date: 'Sept 2023 - Jul 2024',
      role: 'Lead Software Developer',
      company: 'Capstone',
      location: 'Manila, Metro Manila',
    },
    {
      date: 'Sept 2023 - Dec 2023',
      role: 'Junior Software Developer',
      company: 'Navitaire, an Amadeus Company',
      location: 'Taguig, Metro Manila',
    },
    {
      date: 'Aug 2023 - Oct 2023',
      role: 'Mobile Developer',
      company: 'PlantMate',
      location: 'Manila, Metro Manila',
    },
    {
      date: 'Apr 2023',
      role: 'Finalist',
      company: 'UP Algolympics',
      location: 'Quezon, Metro Manila',
    },
    {
      date: 'Jul 2022 - Sept 2022',
      role: 'IT Intern',
      company: 'Accenture Philippines',
      location: 'Mandalyong, Metro Manila',
    },
    {
      date: 'Apr 2022',
      role: 'Finalist',
      company: 'UP Algolympics',
      location: 'Quezon, Metro Manila',
    },
    {
      date: 'Jul 2021 - Sept 2022',
      role: 'Tutor',
      company: 'Peer Tutors Society - De La Salle University Manila',
      location: 'Manila, Metro Manila',
    },
    {
      date: 'Mar 2021 - Sept 2021',
      role: 'Activities Executive',
      company: 'De La Salle University Student Government - College Batch 2T24',
      location: 'Manila, Metro Manila',
    },
  ];

  projects = [
    {
      name: 'Practrack',
      role: 'Fullstack Developer',
      year: 2023,
      path: 'Practrack',
      github: 'https://github.com/gravitygo/Practrack-Server-Capstone',
      description:
        'This is a web application that helps practicum coordination in planning, organizing, leading and controlling tasks for students throughout their practicum subject. This application has an integrated chatting function along side with business analytics',
      stack: [
        'Angular',
        'Firebase',
        'Supabase',
        'Express',
        'TailwindCSS',
        'Figma',
      ],
    },
    {
      name: 'ProfsToPick',
      role: 'Fullstack Developer',
      year: 2023,
      path: 'ProfsToPick',
      github: 'https://github.com/gravitygo/CCAPDEV',
      description:
        'A dynamic web application designed to function similarly to Reddit. This platform empowers students to share their opinions and rate professors, fostering a community-driven environment for academic feedback and insights',
      stack: ['Express', 'MySQL', 'EJS', 'Javascript', 'Figma'],
    },
    {
      name: 'PlantMate',
      role: 'Fullstack Developer',
      year: 2023,
      path: 'PlantMate',
      github: 'https://github.com/gravitygo/PlantMate',
      description:
        'An innovative e-commerce platform designed for plant enthusiasts, featuring a wide array of plant species categorized for easy browsing. This application integrates QR code technology for seamless buying and selling, enhancing the user experience with modern, efficient transactions.',
      stack: ['Kotlin', 'Figma', 'Firebase'],
    },
    {
      name: 'Animal Chess',
      role: 'Fullstack Developer',
      year: 2023,
      path: 'AnimalChess',
      github: 'https://github.com/gravitygo/Animal-Chess',
      description:
        'A captivating Java-based game that brings the classic strategy of chess to life with charming animal characters. Developed using Java Swing for a rich graphical interface and leveraging object-oriented programming principles for robust gameplay mechanics.',
      stack: ['Java'],
    },
    {
      name: 'Diner',
      role: 'Fullstack Developer',
      year: 2023,
      path: 'Diner',
      github: 'https://github.com/gravitygo/ITISDEV',
      description:
        'A comprehensive POS and Inventory Management System equipped with advanced analytics to optimize stock purchasing and minimize losses due to food degradation. This application ensures efficient inventory control and helps businesses make data-driven decisions to maintain freshness and reduce waste.',
      stack: ['Express', 'EJS', 'MySQL', 'Javascript', 'Figma'],
    },
    {
      name: 'GravitySmash',
      role: 'Fullstack Developer',
      year: 2023,
      path: 'GravitySmash',
      github: 'https://github.com/gravitygo/Gravity-Smash',
      description:
        'A thrilling Java game inspired by Geometry Dash, featuring retro aesthetics and a customizable, tileable map configuration. Dive into a nostalgic gaming experience with challenging levels and seamless gameplay, all crafted using Java.',
      stack: ['Java'],
    },
  ];
  constructor(private themeService: ThemeService) {
    this.changeMode(themeService.isDarkMode());
  }

  changeMode(mode: boolean) {
    this.mode = mode ? 'dark' : 'light';
  }

  ngOnInit(): void {
    this.$modeSubscription = this.themeService
      .getModeObservable()
      .subscribe((mode) => this.changeMode(mode));
  }

  ngOnDestroy(): void {
    if (this.$modeSubscription) this.$modeSubscription.unsubscribe();
  }

  setInView(inView: boolean) {
    this.inView = inView;
  }

  changeTab(tab: number) {
    this.active = tab;
  }
}
