import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ecommerce-seo',
  templateUrl: './ecommerce-seo.component.html',
  styleUrls: ['./ecommerce-seo.component.scss']
})
export class EcommerceSeoComponent {

  constructor(
    private _meta: Meta,
    private _title: Title
  ) {
    this._title.setTitle('Best E-Commerce SEO Services | Macreel Infosoft');
    this._meta.addTags([
      {
        name: 'description',
        content: "Boost your online store's visibility with expert E-Commerce SEO services. Drive traffic, increase sales, and stay ahead of the competition. Start optimizing today!"
      },
      {
        name: 'keywords',
        content: "E-Commerce SEO Strategies, Best SEO Agency in India, E-Commerce SEO, Best E-Commerce SEO Services in Delhi NCR, Best SEO Services Company in India"
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
