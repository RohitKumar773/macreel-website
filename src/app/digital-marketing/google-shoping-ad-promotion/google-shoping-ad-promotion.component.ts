import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-google-shoping-ad-promotion',
  templateUrl: './google-shoping-ad-promotion.component.html',
  styleUrls: ['./google-shoping-ad-promotion.component.scss']
})
export class GoogleShopingAdPromotionComponent {

  constructor(
    private _meta: Meta,
    private _title: Title
  ) {
    this._title.setTitle('Shopping Ads Promotion Company in Noida | Macreel Infosoft');
    this._meta.addTags([
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'keywords', content: 'Google Merchant Centre Promotion, Google Shopping Ads Promotion in Delhi, Google Shopping Ads Promotion in India, Best Google Merchant Centre Promotion, Top Google Merchant Centre Promotion in Noida' },
      { name: 'description', content: "Boost your sales with Macreel Infosoft, a leading Shopping Ads Promotion company in Noida. Drive traffic, increase conversions, and grow your online store effortlessly." },
      { name: 'robots', content: 'index, follow' }, // Ensures search engines index and follow links
      { name: 'author', content: 'Macreel Infosoft' },
      { name: 'language', content: 'English' },
      { property: 'og:title', content: 'Best Google Merchant Centre Promotion | Macreel Infosoft' },
      { property: 'og:description', content: "Enhance your eCommerce sales with expert Google Shopping Ads Promotion. Drive traffic and increase conversions effortlessly with Macreel Infosoft." },
      { property: 'og:url', content: 'https://www.macreelinfosoft.com/' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://www.macreelinfosoft.com/assets/images/google-merchant-centre-promotion.jpg' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:title', content: 'Best Google Merchant Centre Promotion' },
      { property: 'twitter:description', content: 'Boost your eCommerce business with expert Google Merchant Centre Promotion and Shopping Ads services. Get more sales with Macreel Infosoft.' },
      { property: 'twitter:image', content: 'https://www.macreelinfosoft.com/assets/images/google-merchant-centre-promotion.jpg' },
      { property: 'twitter:site', content: '@MacreelInfosoft' }
    ]);
  }

}
