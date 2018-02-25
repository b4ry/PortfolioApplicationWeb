import { Component, AfterViewInit } from "@angular/core";
import { Router, NavigationStart, NavigationEnd, NavigationCancel } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements AfterViewInit {
  private loadingPage = true;

  constructor(
      private router: Router
  ) {}

  public ngAfterViewInit(): void {
      this.router.events
          .subscribe((event) => {
              if (event instanceof NavigationStart) {
                  this.loadingPage = true;
              } else if (
                  event instanceof NavigationEnd ||
                  event instanceof NavigationCancel
              ) {
                  this.loadingPage = false;
              }
          });
  }
}
