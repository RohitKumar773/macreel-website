import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-linkedin-promotion',
  templateUrl: './linkedin-promotion.component.html',
  styleUrls: ['./linkedin-promotion.component.scss']
})
export class LinkedinPromotionComponent {

  constructor(
    private _meta: Meta,
    private _title: Title
  ) {
    this._title.setTitle('LinkedIn Promotion Services Noida | Macreel Infosoft');
    this._meta.addTags([
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'keywords', content: 'LinkedIn Marketing Services in Delhi, LinkedIn Promotion Service in India, LinkedIn Promotion, LinkedIn Promotion Services Noida' },
      { name: 'description', content: 'Boost your brand’s presence with LinkedIn Promotion Services from Macreel Infosoft in Noida. Engage your audience and drive growth with expert strategies.' },
      { name: 'robots', content: 'index, follow' }, // Ensures search engines index and follow links
      { name: 'author', content: 'Macreel Infosoft' },
      { name: 'language', content: 'English' },
      { property: 'og:title', content: "LinkedIn Promotion Services Noida | Macreel Infosoft" },
      { property: 'og:description', content: 'Boost your brand visibility with expert LinkedIn Promotion Services. Engage with professionals and grow your business in Noida and beyond.' },
      { property: 'og:url', content: 'https://www.macreelinfosoft.com/' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://www.macreelinfosoft.com/assets/images/linkedin-promotion.jpg' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:title', content: 'LinkedIn Promotion Services Noida | Macreel Infosoft' },
      { property: 'twitter:description', content: 'Boost your LinkedIn presence with expert marketing strategies from Macreel Infosoft. Engage professionals and drive growth.' },
      { property: 'twitter:image', content: 'https://www.macreelinfosoft.com/assets/images/linkedin-promotion.jpg' },
      { property: 'twitter:site', content: '@MacreelInfosoft' }
    ]);
  }

}
