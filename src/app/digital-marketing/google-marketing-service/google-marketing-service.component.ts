import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-google-marketing-service',
  templateUrl: './google-marketing-service.component.html',
  styleUrls: ['./google-marketing-service.component.scss']
})
export class GoogleMarketingServiceComponent {

  constructor(
    private _title: Title,
    private _meta: Meta
  ) {
    this._title.setTitle('Best Google Marketing Services in Noida | Macreel Infosoft');
    this._meta.addTags([
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'keywords', content: 'Google Marketing Services, Google Marketing Services in Delhi, Google Marketing Services In India, Best Google Marketing Services, Top Google Marketing Services' },
      { name: 'description', content: "Boost your brand with expert Google Marketing Services in Delhi NCR. Drive traffic, increase conversions, and grow your business with tailored strategies." },
      { name: 'robots', content: 'index, follow' }, // Ensures search engines index and follow links
      { name: 'author', content: 'Macreel Infosoft' },
      { name: 'language', content: 'English' },
      { property: 'og:title', content: 'Best Google Marketing Services | Macreel Infosoft' },
      { property: 'og:description', content: "Leverage expert Google Marketing Services in Delhi NCR. Maximize ROI with tailored strategies, drive traffic, and boost conversions today!" },
      { property: 'og:url', content: 'https://www.macreelinfosoft.com/' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://www.macreelinfosoft.com/assets/images/google-marketing-services.jpg' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:title', content: 'Best Google Marketing Services' },
      { property: 'twitter:description', content: 'Enhance your business with expert Google Marketing Services. Increase traffic, improve conversions, and maximize growth with Macreel Infosoft.' },
      { property: 'twitter:image', content: 'https://www.macreelinfosoft.com/assets/images/google-marketing-services.jpg' },
      { property: 'twitter:site', content: '@MacreelInfosoft' }
    ]);
  }

}
