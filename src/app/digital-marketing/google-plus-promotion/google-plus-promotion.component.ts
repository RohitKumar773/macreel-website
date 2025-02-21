import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-google-plus-promotion',
  templateUrl: './google-plus-promotion.component.html',
  styleUrls: ['./google-plus-promotion.component.scss']
})
export class GooglePlusPromotionComponent {

  constructor(
    private _title: Title,
    private _meta: Meta
  ) {
    this._title.setTitle('Boost Your Business to New Heights | Macreel’s Google+ Promotion');
    this._meta.addTags([
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'keywords', content: 'Google Plus Marketing Services in Delhi, Google Plus Promotion Service in India, Google+ Marketing Service in India' },
      { name: 'description', content: 'Boost your business with targeted Google+ promotion. Expand your reach, engage your audience, and achieve new heights of success with our expert strategies.' },
      { name: 'robots', content: 'index, follow' }, // Ensures search engines index and follow links
      { name: 'author', content: 'Macreel Infosoft' },
      { name: 'language', content: 'English' },
      { property: 'og:title', content: "Boost Your Business to New Heights | Macreel’s Google+ Promotion" },
      { property: 'og:description', content: 'Expand your business with Google+ promotion services. Engage, grow, and reach a broader audience with Macreel Infosoft’s expert strategies.' },
      { property: 'og:url', content: 'https://www.macreelinfosoft.com/' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://www.macreelinfosoft.com/assets/images/google-plus-marketing.jpg' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:title', content: 'Boost Your Business with Google+ Promotion' },
      { property: 'twitter:description', content: 'Targeted Google+ marketing strategies to expand your business. Engage your audience and boost your brand with Macreel Infosoft.' },
      { property: 'twitter:image', content: 'https://www.macreelinfosoft.com/assets/images/google-plus-marketing.jpg' },
      { property: 'twitter:site', content: '@MacreelInfosoft' }
    ]);
  }

}
