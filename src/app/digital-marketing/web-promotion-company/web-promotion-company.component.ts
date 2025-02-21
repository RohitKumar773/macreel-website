import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-web-promotion-company',
  templateUrl: './web-promotion-company.component.html',
  styleUrls: ['./web-promotion-company.component.scss']
})
export class WebPromotionCompanyComponent {

  constructor(
    private _meta: Meta,
    private _title: Title
  ) {
    this._title.setTitle('Best Web Promotion Company | Macreel Infosoft');
    this._meta.addTags([
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'keywords', content: 'Web Promotion Company, Web Promotion Company in Delhi, Web Promotion Company In India, Best Web Promotion Company, Top Web Promotion Company in Noida' },
      { name: 'description', content: "Boost your online presence with Macreel Infosoft, the best web promotion company in Noida. Expert services in SEO, PPC, and more. Elevate your brand today!" },
      { name: 'robots', content: 'index, follow' }, // Ensures search engines index and follow links
      { name: 'author', content: 'Macreel Infosoft' },
      { name: 'language', content: 'English' },
      { property: 'og:title', content: 'Best Web Promotion Company | Macreel Infosoft' },
      { property: 'og:description', content: "Get expert web promotion services from Macreel Infosoft. We specialize in SEO, PPC, and more to enhance your online presence." },
      { property: 'og:url', content: 'https://www.macreelinfosoft.com/' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://www.macreelinfosoft.com/assets/images/web-promotion-company.jpg' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:title', content: 'Best Web Promotion Company' },
      { property: 'twitter:description', content: 'Macreel Infosoft provides expert web promotion services in Noida, India. Elevate your brand with our SEO and PPC solutions.' },
      { property: 'twitter:image', content: 'https://www.macreelinfosoft.com/assets/images/web-promotion-company.jpg' },
      { property: 'twitter:site', content: '@MacreelInfosoft' }
    ]);
  }

}
