import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { RaceService } from 'src/app/Services/race.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  animations: [trigger('fade', [
    state('in', style({opacity: 1})), transition(':enter', [
      style({opacity: 0}), animate(1000)
    ]),
    transition(':leave', animate(1000, style({opacity: 0})))
  ])
]
})
export class WelcomeComponent implements OnInit {

  constructor(private rs: RaceService) { }

  ngOnInit(): void {
  }
}
