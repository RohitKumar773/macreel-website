import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-google-adword-promotion',
  templateUrl: './google-adword-promotion.component.html',
  styleUrls: ['./google-adword-promotion.component.scss']
})
export class GoogleAdwordPromotionComponent {

  constructor(
    private _title: Title,
    private _meta: Meta
  ) {
    this._title.setTitle('Best Google AdWords Promotion in India | Macreel Infosoft');
    this._meta.addTags([
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'keywords', content: 'Best Google Adwords Promotion in Delhi India, Google Adwords Promotion, Google Adwords Promotion in Delhi, Google Adwords Promotion in India, Best Google Adwords Promotion, Top Google Adwords Promotion' },
      { name: 'description', content: 'Boost your online presence with the top Google AdWords promotion in Delhi by Macreel Infosoft. Expert strategies to maximize ROI and drive targeted traffic.' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Macreel Infosoft' },
      { name: 'language', content: 'English' },
      { property: 'og:title', content: 'Best Google AdWords Promotion in India | Macreel Infosoft' },
      { property: 'og:description', content: 'Boost your online presence with expert Google AdWords promotion strategies. Maximize ROI and drive targeted traffic today!' },
      { property: 'og:url', content: 'https://www.macreelinfosoft.com/' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://www.macreelinfosoft.com' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:title', content: 'Best Google AdWords Promotion in India' },
      { property: 'twitter:description', content: 'Maximize ROI and drive targeted traffic with expert Google AdWords promotion services.' },
      { property: 'twitter:image', content: 'https://www.macreelinfosoft.com' },
      { property: 'twitter:site', content: '@MacreelInfosoft' }
    ]);
  }

}
