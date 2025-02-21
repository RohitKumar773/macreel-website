import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-on-page-seo',
  templateUrl: './on-page-seo.component.html',
  styleUrls: ['./on-page-seo.component.scss']
})
export class OnPageSeoComponent {

  constructor(
    private _meta: Meta,
    private _title: Title
  ) {
    this._title.setTitle('Best On-Page Optimization Services in Noida | Macreel Infosoft');
    this._meta.addTags([
      {
        name: 'description',
        content: "Boost your website's visibility with Macreel Infosoft's top-notch on-page optimization services in Noida. Expert strategies for better search rankings and user engagement."
      },
      {
        name: 'keywords',
        content: "Best On-Page Optimization Services in Noida, Top On-Page Optimization Service Company in Noida, Best SEO Company in Noida"
      },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'author', content: 'Macreel Infosoft Pvt. Ltd.' },
      { name: 'robots', content: 'index, follow' },
      { name: 'googlebot', content: 'index, follow' },
      { name: 'bingbot', content: 'index, follow' }
    ]);
  }

}
