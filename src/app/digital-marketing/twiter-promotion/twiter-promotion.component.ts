import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-twiter-promotion',
  templateUrl: './twiter-promotion.component.html',
  styleUrls: ['./twiter-promotion.component.scss']
})
export class TwiterPromotionComponent {

  constructor(
    private _title: Title,
    private _meta: Meta
  ) {
    this._title.setTitle('Twitter + X Promotion Services in Noida | Macreel Infosoft');
    this._meta.addTags([
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'keywords', content: 'Twitter Promotion Services in Noida, Twitter Marketing Service, Twitter Management Services in India' },
      { name: 'description', content: 'Boost your brand with expert Twitter promotion services in Delhi. Enhance engagement, reach your target audience, and grow your online presence effectively!' },
      { name: 'robots', content: 'index, follow' }, // Ensures search engines index and follow links
      { name: 'author', content: 'Macreel Infosoft' },
      { name: 'language', content: 'English' },
      { property: 'og:title', content: "Twitter Promotion Services in Noida | Macreel Infosoft" },
      { property: 'og:description', content: 'Expand your brand’s reach with expert Twitter marketing. Drive engagement and grow your audience with professional Twitter promotion strategies.' },
      { property: 'og:url', content: 'https://www.macreelinfosoft.com/' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://www.macreelinfosoft.com/assets/images/twitter-promotion.jpg' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:title', content: 'Twitter Promotion Services in Noida | Macreel Infosoft' },
      { property: 'twitter:description', content: 'Boost your brand on Twitter with expert promotion services. Reach your audience, increase engagement, and grow your online presence.' },
      { property: 'twitter:image', content: 'https://www.macreelinfosoft.com/assets/images/twitter-promotion.jpg' },
      { property: 'twitter:site', content: '@MacreelInfosoft' }
    ]);
  }

}
