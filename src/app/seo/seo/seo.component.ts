import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-seo',
  templateUrl: './seo.component.html',
  styleUrls: ['./seo.component.scss']
})
export class SeoComponent {

  constructor(
    private _title: Title,
    private _meta: Meta
  ) {
    this._title.setTitle('Top SEO Services in India, SEO Company in Delhi, Best Organic SEO');
    this._meta.addTags([
      {
        name: 'description',
        content: "Get the Best SEO Services in Noida from Top SEO Company in Delhi. Macreel Infosoft Pvt. Ltd. The Best SEO Agency and Top Ranked SEO Companies offering Organic SEO with guaranteed results."
      },
      {
        name: 'keywords',
        content: "Best SEO Services in Delhi, Best SEO Company in Delhi, Top SEO Services in Delhi, Top SEO Company in Delhi, Professional SEO Services in Delhi, Professional SEO Services India, Organic SEO Services, Organic SEO Services India, Organic SEO Company in India, Best SEO Services in India, Top SEO Services India, Top SEO Agency India, Affordable SEO Company"
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
