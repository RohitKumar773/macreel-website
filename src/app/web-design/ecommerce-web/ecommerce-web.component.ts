import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ecommerce-web',
  templateUrl: './ecommerce-web.component.html',
  styleUrls: ['./ecommerce-web.component.scss']
})
export class EcommerceWebComponent {

  constructor(
    private _title: Title,
    private _meta: Meta
  ) {
    this._title.setTitle('Best E-Commerce Web Designing Company in India| Macreel Infosoft ');
    this._meta.addTags([
      {
        name: 'description',
        content: "Expert E-Commerce Web Designing services that create visually stunning, user-friendly, and responsive online stores to boost your sales and enhance customer experience."
      },
      {
        name: 'keywords',
        content: "Best E-Commerce Web Designing Company in India, Top E-Commerce Web Designing, Best Web Designing Company in India, E-Commerce Web Design, Best E-Commerce Web Designing Company in Delhi"
      },
      { name: 'author', content: 'Macreel Infosoft Pvt. Ltd.' },
      { name: 'distribution', content: 'global' },
      { name: 'language', content: 'English' },
      { name: 'rating', content: 'general' },
      { name: 'revisit-after', content: 'Daily' },
      { name: 'robots', content: 'ALL' },
      { name: 'googlebot', content: 'index, follow' },
      { name: 'bingbot', content: 'index, follow' },
      { name: 'reply-to', content: 'sales@macreel.co.in' },
      { name: 'coverage', content: 'Worldwide' }
    ]);
  }

}
