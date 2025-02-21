import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-google-promotion-service',
  templateUrl: './google-promotion-service.component.html',
  styleUrls: ['./google-promotion-service.component.scss']
})
export class GooglePromotionServiceComponent {

  constructor(
    private _title: Title,
    private _meta: Meta
  ) {
    this._title.setTitle('Best Google Promotion Services in Noida, India | Macreel Infosoft');
    this._meta.addTags([
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'keywords', content: 'Google Promotion Services, Google Promotion Services in Delhi, Google Promotion Services In India, Best Google Promotion Services, Top Google Promotion Services' },
      { name: 'description', content: "Boost your online presence with Macreel Infosoft's top Google promotion services in Delhi NCR. Expert strategies for higher rankings and increased visibility." },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Macreel Infosoft' },
      { name: 'language', content: 'English' },
      { property: 'og:title', content: 'Best Google Promotion Services in India | Macreel Infosoft' },
      { property: 'og:description', content: "Boost your online presence with Macreel Infosoft's Google promotion services in Delhi NCR for better rankings and visibility." },
      { property: 'og:url', content: 'https://www.macreelinfosoft.com/' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://www.macreelinfosoft.com' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:title', content: 'Best Google Promotion Services in India' },
      { property: 'twitter:description', content: "Expert Google promotion services to increase rankings and online visibility." },
      { property: 'twitter:image', content: 'https://www.macreelinfosoft.com' },
      { property: 'twitter:site', content: '@MacreelInfosoft' }
    ]);
  }

}
