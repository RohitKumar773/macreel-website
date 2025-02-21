import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-instagram-promotion',
  templateUrl: './instagram-promotion.component.html',
  styleUrls: ['./instagram-promotion.component.scss']
})
export class InstagramPromotionComponent {

  constructor(
    private _meta: Meta,
    private _title: Title
  ) {
    this._title.setTitle('Best Instagram Marketing Services in Noida | Macreel Infosoft');
    this._meta.addTags([
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'keywords', content: 'Best Instagram Marketing Services in Noida, Top Instagram Marketing Services in Noida, Instagram Marketing Services in India, Best Instagram Marketing Services in Delhi NCR' },
      { name: 'description', content: 'Boost your brand with expert Instagram marketing services in Delhi NCR by Macreel Infosoft. Engage, grow, and convert with our tailored strategies for success.' },
      { name: 'robots', content: 'index, follow' }, // Ensures search engines index and follow links
      { name: 'author', content: 'Macreel Infosoft' },
      { name: 'language', content: 'English' },
      { property: 'og:title', content: 'Best Instagram Marketing Services in Noida | Macreel Infosoft' },
      { property: 'og:description', content: 'Elevate your brand with expert Instagram marketing strategies in Delhi NCR. Engage, grow, and convert with Macreel Infosoft’s professional services.' },
      { property: 'og:url', content: 'https://www.macreelinfosoft.com/' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://www.macreelinfosoft.com/assets/images/instagram-marketing.jpg' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:title', content: 'Best Instagram Marketing Services in Noida' },
      { property: 'twitter:description', content: 'Drive engagement and conversions with expert Instagram marketing services. Macreel Infosoft helps businesses succeed on social media.' },
      { property: 'twitter:image', content: 'https://www.macreelinfosoft.com/assets/images/instagram-marketing.jpg' },
      { property: 'twitter:site', content: '@MacreelInfosoft' }
    ]);
  }

}
