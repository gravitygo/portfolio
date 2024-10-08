import { Component, ViewEncapsulation, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

import anime from 'animejs';
import { generator } from '../../utils/generate-blob.utils';
@Component({
  selector: 'app-blob',
  templateUrl: './blob.component.html',
  styleUrl: './blob.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class BlobComponent implements AfterViewInit {
  @ViewChild('parallaxContainer') parallaxContainer!: ElementRef;
  @ViewChild('path') path!: ElementRef;

  svg: string = "";
  constructor() {
    this.svg = generator({ edges: (Math.floor(Math.random() * 5) + 3) }).path;
  }

  ngAfterViewInit() {
    let bbox = this.path.nativeElement.getBBox()
    this.parallaxContainer.nativeElement.setAttribute('viewBox', `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`)
  }
}
