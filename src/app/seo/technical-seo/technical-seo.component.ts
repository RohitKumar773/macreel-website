import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-technical-seo',
  templateUrl: './technical-seo.component.html',
  styleUrls: ['./technical-seo.component.scss']
})
export class TechnicalSeoComponent {

  constructor(
    private _title: Title,
    private _meta: Meta
  ) {
    this._title.setTitle('Best Technical SEO Services in Noida | Macreel Infosoft');
    this._meta.addTags([
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'keywords', content: 'Technical SEO, Best Technical SEO Services in Noida, Website Performance Optimization, SEO Audit Services, Page Speed Optimization, Core Web Vitals, Mobile-Friendly SEO' },
      { name: 'description', content: 'Boost your website’s performance with Macreel’s expert technical SEO services. We optimize site speed, usability, crawlability, and search rankings. Get a free audit today!' },
      { name: 'robots', content: 'index, follow' },
      { name: 'googlebot', content: 'index, follow' },
      { name: 'bingbot', content: 'index, follow' }
    ]);
  }

}
