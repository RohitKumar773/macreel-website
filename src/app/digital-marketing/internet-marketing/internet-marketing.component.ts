import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-internet-marketing',
  templateUrl: './internet-marketing.component.html',
  styleUrls: ['./internet-marketing.component.scss']
})
export class InternetMarketingComponent {

  constructor(
    private _meta: Meta,
    private _title: Title
  ) { 
    this._title.setTitle('Top Internet Marketing Company in India | Macreel Infosoft');
    this._meta.addTags([
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'keywords', content: 'Top Internet Marketing Company in India, SEO services, PPC management, Social Media Marketing, Digital Marketing Agency Noida, Online Branding' },
      { name: 'description', content: 'Boost your online presence with Macreel Infosoft’s expert SEO, PPC, and social media marketing services in Delhi NCR. Drive traffic and grow your business online.' },
      { name: 'author', content: 'Macreel Infosoft' },
      { name: 'robots', content: 'index, follow' }, // Ensures search engines index the page
      { name: 'language', content: 'English' },
      { name: 'geo.region', content: 'IN-UP' }, // Geo-targeting (UP = Uttar Pradesh)
      { name: 'geo.placename', content: 'Noida' },
      { property: 'og:title', content: 'Top Internet Marketing Company in India | Macreel Infosoft' },
      { property: 'og:description', content: 'Drive more traffic with SEO, PPC, and social media marketing. Expert digital marketing services in Delhi NCR.' },
      { property: 'og:url', content: 'https://www.macreelinfosoft.com/' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://www.macreelinfosoft.com/assets/images/marketing-banner.jpg' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:title', content: 'Top Internet Marketing Company in India' },
      { property: 'twitter:description', content: 'SEO, PPC, and social media services to grow your online presence.' },
      { property: 'twitter:image', content: 'https://www.macreelinfosoft.com/assets/images/marketing-banner.jpg' },
      { property: 'twitter:site', content: '@MacreelInfosoft' }
    ]);
  }

}
