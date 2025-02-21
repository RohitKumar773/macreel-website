import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-off-page-seo',
  templateUrl: './off-page-seo.component.html',
  styleUrls: ['./off-page-seo.component.scss']
})
export class OffPageSeoComponent {

  constructor(
    private _meta: Meta,
    private _title: Title
  ) {
    this._title.setTitle('Best Off-Page Optimization Services in Noida | Macreel Infosoft');
    this._meta.addTags([
      {
        name: 'description',
        content: "Boost your site's visibility with Macreel Infosoft's top-notch off-page optimization services in Noida. Enhance rankings and drive traffic effectively!"
      },
      {
        name: 'keywords',
        content: "Best Off-Page Optimization Services in Noida, Best SEO Agency in India, Best Off-Page Optimization Services in Delhi NCR"
      },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'author', content: 'Macreel Infosoft Pvt. Ltd.' },
      { name: 'robots', content: 'index, follow' },
      { name: 'googlebot', content: 'index, follow' },
      { name: 'bingbot', content: 'index, follow' }
    ]);
  }

}
