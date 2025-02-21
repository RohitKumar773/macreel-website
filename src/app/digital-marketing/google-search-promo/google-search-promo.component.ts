import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-google-search-promo',
  templateUrl: './google-search-promo.component.html',
  styleUrls: ['./google-search-promo.component.scss']
})
export class GoogleSearchPromoComponent {

  constructor(
    private _meta: Meta,
    private _title: Title
  ) {
    this._title.setTitle('Best Google Search Promotion Services | Macreel Infosoft');
    this._meta.addTags([
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'keywords', content: 'Google Search Promotion, Google Search Promotion in Delhi, Google Search Promotion in India, Best Google Search Promotion, Top Google Search Promotion in Noida' },
      { name: 'description', content: "Boost your online presence with the top Google Search Promotion Company in Noida. Expert strategies to enhance visibility and drive traffic effectively." },
      { name: 'robots', content: 'index, follow' }, // Ensures search engines index and follow links
      { name: 'author', content: 'Macreel Infosoft' },
      { name: 'language', content: 'English' },
      { property: 'og:title', content: 'Best Google Search Promotion Services | Macreel Infosoft' },
      { property: 'og:description', content: "Get expert Google Search Promotion services from Macreel Infosoft to increase your website’s visibility and attract quality traffic." },
      { property: 'og:url', content: 'https://www.macreelinfosoft.com/' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://www.macreelinfosoft.com/assets/images/google-search-promotion.jpg' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:title', content: 'Best Google Search Promotion Services' },
      { property: 'twitter:description', content: 'Macreel Infosoft offers expert Google Search Promotion strategies to boost your rankings and drive traffic. Get started today!' },
      { property: 'twitter:image', content: 'https://www.macreelinfosoft.com/assets/images/google-search-promotion.jpg' },
      { property: 'twitter:site', content: '@MacreelInfosoft' }
    ]);
  }

}
