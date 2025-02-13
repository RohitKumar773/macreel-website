import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private route: Router) {}

  scrollOnHome() {
    this.route.navigate(['/home']);
    scroll(0, 0);
  }
  scrollOnAbout() {
    this.route.navigate(['/home/pages']);
    scroll(0, 0);
  }
  scrollOnDirector() {
    this.route.navigate(['/home/pages/directorMsg']);
    scroll(0, 0);
  }
  scrollOnTeam() {
    this.route.navigate(['/home/pages/ourteam']);
    scroll(0, 0);
  }
  scrollOnOrganization() {
    this.route.navigate(['/home/pages/orgStructure']);
    scroll(0, 0);
  }
  scrollOnVision() {
    this.route.navigate(['/home/pages/visson']);
    scroll(0, 0);
  }
  scrollOnWebdesign() {
    this.route.navigate(['/home/webdesign/webdesign']);
    scroll(0, 0);
  }
  scrollOnEcommerce() {
    this.route.navigate(['/home/webdesign/ecommerceWeb']);
    scroll(0, 0);
  }
  //
  scrollOnResponsiveWeb() {
    this.route.navigate(['/home/webdesign/responsiveWeb']);
    scroll(0, 0);
  }
  scrollOnStaticWeb() {
    this.route.navigate(['/home/webdesign/staticWeb']);
    scroll(0, 0);
  }
  scrollOnDynamicWeb() {
    this.route.navigate(['/home/webdesign/dynamicWeb']);
    scroll(0, 0);
  }
  scrollOnCustomWeb() {
    this.route.navigate(['/home/webdesign/customWeb']);
    scroll(0, 0);
  }
  scrollOnReesign() {
    this.route.navigate(['/home/webdesign/webRedesign']);
    scroll(0, 0);
  }
  scrollOnSeoWeb() {
    this.route.navigate(['/home/webdesign/seoWeb']);
    scroll(0, 0);
  }
  scrollOnTop() {
    scroll(0, 0);
  }
}
