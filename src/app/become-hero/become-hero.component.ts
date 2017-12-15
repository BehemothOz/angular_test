import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-become-hero',
  templateUrl: './become-hero.component.html',
  styleUrls: ['./become-hero.component.scss']
})
export class BecomeHeroComponent implements OnInit {

  shownPopup = false;

  constructor() { }

  ngOnInit() {
  }

  showPopup() {
    this.shownPopup = true;
  }

  closePopup() {
    this.shownPopup = false;
  }

}
