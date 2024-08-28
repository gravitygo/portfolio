import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss'
})
export class RolesComponent {
  @Input() roles: { date: string, role: string, company: string, location: string }[] = [];
}
