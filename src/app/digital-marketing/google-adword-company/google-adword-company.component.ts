import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-google-adword-company',
  templateUrl: './google-adword-company.component.html',
  styleUrls: ['./google-adword-company.component.scss']
})
export class GoogleAdwordCompanyComponent {

  constructor(
    private _meta: Meta,
    private _title: Title
  ) {
    this._title.setTitle('Best Google AdWords Company in India | Macreel Infosoft');
    this._meta.addTags([
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'keywords', content: 'Google Adwords Company, Google Adwords Company In Delhi, Google Adwords Company In India, Best Google Adwords Company, Top Google Adwords Company' },
      { name: 'description', content: 'Boost your online presence with the best Google Ads services in Noida. Macreel Infosoft offers expert solutions for maximum ROI and targeted results.' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Macreel Infosoft' },
      { name: 'language', content: 'English' },
      { property: 'og:title', content: 'Best Google AdWords Company in India | Macreel Infosoft' },
      { property: 'og:description', content: 'Looking for the best Google Ads services? Macreel Infosoft provides expert solutions to maximize ROI and deliver targeted results.' },
      { property: 'og:url', content: 'https://www.macreelinfosoft.com/' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://www.macreelinfosoft.com' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:title', content: 'Best Google AdWords Company in India' },
      { property: 'twitter:description', content: 'Maximize ROI with expert Google Ads services by Macreel Infosoft in Noida.' },
      { property: 'twitter:image', content: 'https://www.macreelinfosoft.com' },
      { property: 'twitter:site', content: '@MacreelInfosoft' }
    ]);
  }

}
