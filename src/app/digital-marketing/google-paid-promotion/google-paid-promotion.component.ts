import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-google-paid-promotion',
  templateUrl: './google-paid-promotion.component.html',
  styleUrls: ['./google-paid-promotion.component.scss']
})
export class GooglePaidPromotionComponent {

  constructor(
    private _meta: Meta,
    private _title: Title
  ) {
    this._title.setTitle('Best Google Paid Promotion Services | Macreel Infosoft');
    this._meta.addTags([
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'keywords', content: 'Google Paid Promotion, Google Paid Promotion in Delhi, Google Paid Promotion in India, Best Google Paid Promotion, Top Google Paid Promotion in Noida' },
      { name: 'description', content: "Boost your online presence with Macreel Infosoft's top Google Paid Promotion services in Noida. Maximize your ROI and drive quality leads today!" },
      { name: 'robots', content: 'index, follow' }, // Ensures search engines index and follow links
      { name: 'author', content: 'Macreel Infosoft' },
      { name: 'language', content: 'English' },
      { property: 'og:title', content: 'Best Google Paid Promotion Services | Macreel Infosoft' },
      { property: 'og:description', content: "Increase your business reach with expert Google Paid Promotion services by Macreel Infosoft. Target the right audience and maximize ROI." },
      { property: 'og:url', content: 'https://www.macreelinfosoft.com/' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://www.macreelinfosoft.com/assets/images/google-paid-promotion.jpg' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:title', content: 'Best Google Paid Promotion Services' },
      { property: 'twitter:description', content: 'Macreel Infosoft provides top-notch Google Paid Promotion services to help businesses grow. Get quality leads and maximize ROI today!' },
      { property: 'twitter:image', content: 'https://www.macreelinfosoft.com/assets/images/google-paid-promotion.jpg' },
      { property: 'twitter:site', content: '@MacreelInfosoft' }
    ]);
  }

}
