import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private router: Router) {}

  navigateTo(path: string) {
    this.router.navigate([path]);
    scroll(0, 0);
  }

  scrollOnTop() {
    scroll(0, 0);
  }

  isActive(paths: string | string[]): boolean {
    if (typeof paths === 'string') {
      return this.router.url === paths; // Exact match for single path
    } else if (Array.isArray(paths)) {
      return paths.some(path => this.router.url.startsWith(path)); // Match any of the paths
    }
    return false;
  }
  


}
