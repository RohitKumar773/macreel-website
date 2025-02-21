import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-local-website-promotion',
  templateUrl: './local-website-promotion.component.html',
  styleUrls: ['./local-website-promotion.component.scss']
})
export class LocalWebsitePromotionComponent {

  constructor(
    private _meta: Meta,
    private _title: Title
  ) {
    this._title.setTitle('Best Local Website Promotion | Macreel Infosoft');
    this._meta.addTags([
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'keywords', content: 'Local Website Promotion, Local Website Promotion in Delhi, Local Website Promotion In India, Best Local Website Promotion, Top Local Website Promotion in Noida' },
      { name: 'description', content: "Boost your business with Macreel Infosoft’s expert local website promotion services in Noida. Drive traffic, increase visibility, and grow your online presence effortlessly." },
      { name: 'robots', content: 'index, follow' }, // Ensures search engines index and follow links
      { name: 'author', content: 'Macreel Infosoft' },
      { name: 'language', content: 'English' },
      { property: 'og:title', content: 'Best Local Website Promotion | Macreel Infosoft' },
      { property: 'og:description', content: "Increase your local online visibility with Macreel Infosoft’s top local website promotion services. Get more traffic and customers effortlessly." },
      { property: 'og:url', content: 'https://www.macreelinfosoft.com/' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://www.macreelinfosoft.com/assets/images/local-website-promotion.jpg' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:title', content: 'Best Local Website Promotion' },
      { property: 'twitter:description', content: 'Macreel Infosoft offers expert local website promotion services to boost visibility and drive local traffic. Start growing your business today!' },
      { property: 'twitter:image', content: 'https://www.macreelinfosoft.com/assets/images/local-website-promotion.jpg' },
      { property: 'twitter:site', content: '@MacreelInfosoft' }
    ]);
  }

}
