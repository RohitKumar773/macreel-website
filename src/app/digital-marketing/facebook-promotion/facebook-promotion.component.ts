import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-facebook-promotion',
  templateUrl: './facebook-promotion.component.html',
  styleUrls: ['./facebook-promotion.component.scss']
})
export class FacebookPromotionComponent {

  constructor(
    private _meta: Meta,
    private _title: Title
  ) {
    this._title.setTitle('Top Facebook Marketing Services in India | Macreel Infosoft');
    this._meta.addTags([
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'keywords', content: 'Top Facebook Marketing Services in Delhi NCR, Best Facebook Marketing Services in India, Best Facebook Marketing Company in India' },
      { name: 'description', content: "Boost your brand with top Facebook marketing services in Delhi NCR. Macreel Infosoft offers expert strategies to enhance your social media presence and engagement." },
      { name: 'robots', content: 'index, follow' }, // Ensures search engines index and follow links
      { name: 'author', content: 'Macreel Infosoft' },
      { name: 'language', content: 'English' },
      { property: 'og:title', content: 'Top Facebook Marketing Services in India | Macreel Infosoft' },
      { property: 'og:description', content: "Enhance your brand's social media presence with expert Facebook marketing services in India. Drive engagement, reach more customers, and grow your business." },
      { property: 'og:url', content: 'https://www.macreelinfosoft.com/' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://www.macreelinfosoft.com/assets/images/facebook-marketing.jpg' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:title', content: 'Top Facebook Marketing Services in India' },
      { property: 'twitter:description', content: 'Leverage expert Facebook marketing strategies to increase engagement and brand awareness. Macreel Infosoft helps you grow your business online.' },
      { property: 'twitter:image', content: 'https://www.macreelinfosoft.com/assets/images/facebook-marketing.jpg' },
      { property: 'twitter:site', content: '@MacreelInfosoft' }
    ]);
  }

}
