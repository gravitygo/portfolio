import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './background/background.component';
import { HomeComponent } from './component/home/home.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { ExperienceComponent } from './component/experience/experience.component';
import { ContactComponent } from './component/contact/contact.component';
import { RevealComponent } from './animate/reveal/reveal.component';
import { TabComponent } from './component/tab/tab.component';
import { SkillsComponent } from './component/skills/skills.component';
import { RolesComponent } from './component/roles/roles.component';
import { RoleEntryComponent } from './component/role-entry/role-entry.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { ProjectEntryComponent } from './project-entry/project-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    HomeComponent,
    NavBarComponent,
    ExperienceComponent,
    ContactComponent,
    RevealComponent,
    TabComponent,
    SkillsComponent,
    RolesComponent,
    RoleEntryComponent,
    ProjectsComponent,
    ProjectEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
