import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-google-branding-service',
  templateUrl: './google-branding-service.component.html',
  styleUrls: ['./google-branding-service.component.scss']
})
export class GoogleBrandingServiceComponent {

  constructor(
    private _meta: Meta,
    private _title: Title
  ) {
    this._title.setTitle('Best Google Branding Promotion in India | Macreel Infosoft  ');
    this._meta.addTags([
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'keywords', content: 'Google Branding Promotion, Google Branding Promotion in Delhi, Google Branding Promotion In India, Best Google Branding Promotion, Top Google Branding Promotion' },
      { name: 'description', content: "Boost your brand's visibility with the Best Google Branding Promotion Services in India from Macreel Infosoft. Elevate your online presence today!" },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Macreel Infosoft' },
      { name: 'language', content: 'English' },
      { property: 'og:title', content: 'Best Google Branding Promotion in India | Macreel Infosoft' },
      { property: 'og:description', content: "Boost your brand's visibility with expert Google Branding Promotion Services. Elevate your online presence today!" },
      { property: 'og:url', content: 'https://www.macreelinfosoft.com' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://www.macreelinfosoft.com' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:title', content: 'Best Google Branding Promotion in India' },
      { property: 'twitter:description', content: "Boost your brand's reach with expert Google Branding Promotion Services." },
      { property: 'twitter:image', content: 'https://www.macreelinfosoft.com' },
      { property: 'twitter:site', content: '@MacreelInfosoft' }

    ]);
  }

}
