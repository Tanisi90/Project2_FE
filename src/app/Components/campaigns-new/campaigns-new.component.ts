import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campaigns-new',
  templateUrl: './campaigns-new.component.html',
  styleUrls: ['./campaigns-new.component.css']
})
export class CampaignsNewComponent implements OnInit {
  hidden: boolean;

  constructor() {
    this.hidden = true;
  }

  ngOnInit(): void {
  }

  submit(): void {

  }
}
