import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-center',
  styleUrls: ["../shared/styles/center.style.scss"],
  template: `<router-outlet></router-outlet>`
})
export class CustomerCenterComponent implements OnInit {
  constructor() { }
  ngOnInit() { }
}
