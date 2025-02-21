import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-online-website-promotion',
  templateUrl: './online-website-promotion.component.html',
  styleUrls: ['./online-website-promotion.component.scss']
})
export class OnlineWebsitePromotionComponent {

  constructor(
    private _meta: Meta,
    private _title: Title
  ) {
    this._title.setTitle('Best Online Website Promotion Services | Macreel Infosoft');
    this._meta.addTags([
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'keywords', content: 'Online Website Promotion, Online Website Promotion in Delhi, Online Website Promotion in India, Best Online Website Promotion, Top Online Website Promotion in Noida' },
      { name: 'description', content: "Boost your online presence with Macreel Infosoft's top-notch website promotion services. Drive traffic, improve rankings, and enhance visibility effectively." },
      { name: 'robots', content: 'index, follow' }, // Ensures search engines index and follow links
      { name: 'author', content: 'Macreel Infosoft' },
      { name: 'language', content: 'English' },
      { property: 'og:title', content: 'Best Online Website Promotion Services | Macreel Infosoft' },
      { property: 'og:description', content: "Drive more traffic and improve your search rankings with expert online website promotion services from Macreel Infosoft." },
      { property: 'og:url', content: 'https://www.macreelinfosoft.com/' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://www.macreelinfosoft.com/assets/images/website-promotion.jpg' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:title', content: 'Best Online Website Promotion Services' },
      { property: 'twitter:description', content: 'Boost your online presence with expert website promotion strategies by Macreel Infosoft.' },
      { property: 'twitter:image', content: 'https://www.macreelinfosoft.com/assets/images/website-promotion.jpg' },
      { property: 'twitter:site', content: '@MacreelInfosoft' }
    ]);
  }

}
