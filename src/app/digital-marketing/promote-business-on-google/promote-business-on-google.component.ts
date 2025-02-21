import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-promote-business-on-google',
  templateUrl: './promote-business-on-google.component.html',
  styleUrls: ['./promote-business-on-google.component.scss']
})
export class PromoteBusinessOnGoogleComponent {

  constructor(
    private _meta: Meta,
    private _title: Title
  ) {
    this._title.setTitle('Best Promote Business on Google in Noida | Macreel Infosoft');
    this._meta.addTags([
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'keywords', content: 'Promote Business on Google, Promote Business on Google in Delhi, Promote Business on Google In India, Best Promote Business On Google, Top Promote Business On Google in Noida' },
      { name: 'description', content: "Boost your business visibility with top-notch Google promotion services in Noida from Macreel Infosoft. Get noticed, get results!" },
      { name: 'robots', content: 'index, follow' }, // Ensures search engines index and follow links
      { name: 'author', content: 'Macreel Infosoft' },
      { name: 'language', content: 'English' },
      { property: 'og:title', content: 'Best Google Promotion Services | Macreel Infosoft' },
      { property: 'og:description', content: "Looking to promote your business on Google? Macreel Infosoft offers expert services to increase visibility and drive success." },
      { property: 'og:url', content: 'https://www.macreelinfosoft.com/' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://www.macreelinfosoft.com/assets/images/google-promotion.jpg' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:title', content: 'Best Google Promotion Services' },
      { property: 'twitter:description', content: 'Macreel Infosoft helps businesses grow with expert Google promotion strategies. Get noticed today!' },
      { property: 'twitter:image', content: 'https://www.macreelinfosoft.com/assets/images/google-promotion.jpg' },
      { property: 'twitter:site', content: '@MacreelInfosoft' }
    ]);
  }

}
