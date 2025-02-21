import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-local-seo',
  templateUrl: './local-seo.component.html',
  styleUrls: ['./local-seo.component.scss']
})
export class LocalSeoComponent {

  constructor(
    private _title: Title,
    private _meta: Meta
  ) {
    this._title.setTitle('Best Local SEO Services | Top Local SEO Company in India');
    this._meta.addTags([
      {
        name: 'description',
        content: "Boost your business with Macreel Infosoft's top local SEO services in India. Drive more traffic, enhance visibility, and grow your local presence effectively."
      },
      {
        name: 'keywords',
        content: "Best Local SEO Service Company in India, Best Local SEO Service Company in Noida"
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
