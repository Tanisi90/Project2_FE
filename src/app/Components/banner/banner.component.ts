import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [trigger('fade', [
    state('in', style({opacity: 1})), transition(':enter', [
      style({opacity: 0}), animate(1000)
    ]),
    transition(':leave', animate(1000, style({opacity: 0})))
  ])]
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
