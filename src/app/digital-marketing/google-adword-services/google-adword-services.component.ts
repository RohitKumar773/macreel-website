import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-google-adword-services',
  templateUrl: './google-adword-services.component.html',
  styleUrls: ['./google-adword-services.component.scss']
})
export class GoogleAdwordServicesComponent {

  constructor(
    private _meta: Meta,
    private _title: Title
  ) {
    this._title.setTitle('Best Google AdWords Services in Noida | Macreel Infosoft');
    this._meta.addTags([
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'keywords', content: 'Google Adwords Services, Google Adwords Services in Delhi, Google Adwords Services In India, Best Google Adwords Services, Top Google Adwords Services in Noida' },
      { name: 'description', content: 'Boost your business with top Google Adwords services in Noida. Macreel Infosoft delivers targeted campaigns and measurable results for your success.' },
      { name: 'robots', content: 'index, follow' }, // Ensures search engines index and follow links
      { name: 'author', content: 'Macreel Infosoft' },
      { name: 'language', content: 'English' },
      { property: 'og:title', content: 'Best Google AdWords Services in Noida | Macreel Infosoft' },
      { property: 'og:description', content: 'Macreel Infosoft offers expert Google Adwords services in Noida, delivering targeted campaigns for measurable business success.' },
      { property: 'og:url', content: 'https://www.macreelinfosoft.com/' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://www.macreelinfosoft.com/assets/images/google-adwords-services.jpg' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:title', content: 'Best Google AdWords Services in Noida' },
      { property: 'twitter:description', content: 'Grow your business with expert Google Adwords services in Noida from Macreel Infosoft.' },
      { property: 'twitter:image', content: 'https://www.macreelinfosoft.com/assets/images/google-adwords-services.jpg' },
      { property: 'twitter:site', content: '@MacreelInfosoft' }
    ]);
  }

}
