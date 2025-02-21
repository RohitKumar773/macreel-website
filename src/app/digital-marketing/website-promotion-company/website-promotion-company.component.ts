import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-website-promotion-company',
  templateUrl: './website-promotion-company.component.html',
  styleUrls: ['./website-promotion-company.component.scss']
})
export class WebsitePromotionCompanyComponent {

  constructor(
    private _meta: Meta,
    private _title: Title
  ) {
    this._title.setTitle('Best Website Promotion Company in Noida | Macreel Infosoft');
    this._meta.addTags([
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'keywords', content: 'Web Promotion Company, Web Promotion Company in Delhi, Web Promotion Company In India, Best Web Promotion Company, Top Web Promotion Company in Noida' },
      { name: 'description', content: "Boost your online presence with Macreel Infosoft, the best web promotion company in Noida. Expert services in SEO, PPC, and more. Elevate your brand today!" },
      { name: 'robots', content: 'index, follow' }, // Ensures search engines index and follow links
      { name: 'author', content: 'Macreel Infosoft' },
      { name: 'language', content: 'English' },
      { property: 'og:title', content: 'Best Web Promotion Company in Noida | Macreel Infosoft' },
      { property: 'og:description', content: "Macreel Infosoft offers expert web promotion services, including SEO and PPC, to enhance your online visibility and grow your business." },
      { property: 'og:url', content: 'https://www.macreelinfosoft.com/' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://www.macreelinfosoft.com/assets/images/web-promotion.jpg' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:title', content: 'Best Web Promotion Company in Noida' },
      { property: 'twitter:description', content: 'Grow your business with expert web promotion services from Macreel Infosoft. SEO, PPC, and more!' },
      { property: 'twitter:image', content: 'https://www.macreelinfosoft.com/assets/images/web-promotion.jpg' },
      { property: 'twitter:site', content: '@MacreelInfosoft' }
    ]);
  }

}
