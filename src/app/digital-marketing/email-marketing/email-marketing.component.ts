import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-email-marketing',
  templateUrl: './email-marketing.component.html',
  styleUrls: ['./email-marketing.component.scss']
})
export class EmailMarketingComponent {

  constructor(
    private _title: Title,
    private _meta: Meta
  ) {
    this._title.setTitle('Top Email Marketing Services in Delhi NCR | Macreel Infosoft');
    this._meta.addTags([
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'description', content: 'Boost your brand with Macreel Infosoft\'s expert email marketing services in Noida. Engage your audience and drive results with tailored campaigns.' },
      { name: 'keywords', content: 'Top-Notch Email Marketing Services in Delhi NCR, Best Email Marketing Company in Delhi NCR, Top Email Marketing Services' },
      { name: 'author', content: 'Macreel Infosoft Pvt. Ltd.' },
      { name: 'robots', content: 'index, follow' },
      { name: 'googlebot', content: 'index, follow' },
      { name: 'bingbot', content: 'index, follow' },
      { name: 'revisit-after', content: 'Daily' },
      { name: 'coverage', content: 'Worldwide' },
      { property: 'og:title', content: 'Top Email Marketing Services in Delhi NCR | Macreel Infosoft' },
      { property: 'og:description', content: 'Boost your brand with Macreel Infosoft\'s expert email marketing services in Noida. Engage your audience and drive results with tailored campaigns.' },
      { property: 'og:image', content: 'https://www.macreel.co.in' }, 
      { property: 'og:url', content: 'https://www.macreel.co.in/email-marketing' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Top Email Marketing Services in Delhi NCR | Macreel Infosoft' },
      { name: 'twitter:description', content: 'Boost your brand with Macreel Infosoft\'s expert email marketing services in Noida. Engage your audience and drive results with tailored campaigns.' },
      { name: 'twitter:image', content: 'https://www.macreel.co.in/assets/email-marketing-banner.jpg' }
    ]);
  }

}
