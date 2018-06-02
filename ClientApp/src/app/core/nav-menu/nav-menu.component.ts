import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { MatMenuTrigger } from "@angular/material";
// service
// unmark this if AuthService complete

@Component({
  selector: "app-nav-menu",
  templateUrl: "./nav-menu.component.html",
  styleUrls: ["../../shared/styles/navmenu.style.scss"],
})
export class NavMenuComponent implements OnInit {
  constructor(
    // unmark this if AuthService complete
    private router: Router
  ) { }

  ngOnInit(): void {
    // reset login status
  }
}
