import { Component, ElementRef, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-role-entry',
  templateUrl: './role-entry.component.html',
  styleUrl: './role-entry.component.scss'
})
export class RoleEntryComponent {
  scrollEntry?: Element
  @Input() role?: { date: string, role: string, company: string, location: string };
  @Input() last?: boolean;
  inView = false;

  constructor(private currentElement: ElementRef, private cd: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.scrollEntry = this.currentElement.nativeElement.parentElement.parentElement.parentElement;
    this.cd.detectChanges();
  }

  setInView(inView: boolean) {
    this.inView = inView;
  }
}
