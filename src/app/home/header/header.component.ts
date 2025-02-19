import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private route: Router) {}

  navigateTo(path: string) {
    this.route.navigate([path]);
    scroll(0, 0);
  }

  scrollOnTop() {
    scroll(0, 0);
  }

}
