import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-seo-web',
  templateUrl: './seo-web.component.html',
  styleUrls: ['./seo-web.component.scss']
})
export class SeoWebComponent {

  constructor(
    private _meta: Meta,
    private _title: Title
  ) {
    this._title.setTitle('Best SEO Web Design Company in Noida | Macreel Infosoft');
    this._meta.addTags([
      {
        name: 'description',
        content: "Boost your online presence with our expert SEO web design services. We craft optimized, user-friendly websites that drive traffic and improve search engine rankings."
      },
      {
        name: 'keywords',
        content: "SEO Friendly Web Design, Best SEO Web Design Company in Noida, SEO Services India, Organic SEO Company in India, Best SEO Services in India, Top SEO Services India, Top SEO Agency India, Affordable SEO Company"
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
