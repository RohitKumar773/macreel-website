import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  navigateTo(path: string) {
    console.log("path ", path);
    this.router.navigate([path]);
    scroll(0, 0);
  }

  constructor(
    private router: Router
  ) { }
}
