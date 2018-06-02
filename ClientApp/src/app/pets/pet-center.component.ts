import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet-center',
  styleUrls: ["../shared/styles/center.style.scss"],
  template: `<router-outlet></router-outlet>`
})
export class PetCenterComponent implements OnInit {
  constructor() { }
  ngOnInit() { }
}
