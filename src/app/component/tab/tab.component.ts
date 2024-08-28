import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class TabComponent {
  @Input() tabs: String[] = [];
  @Output() emitActive: EventEmitter<number> = new EventEmitter<number>();
  active!: number;

  constructor() {
    this.changeTab(0);
  }

  changeTab(tab: number) {
    this.active = tab
    this.emitActive.emit(tab)
  }
}
