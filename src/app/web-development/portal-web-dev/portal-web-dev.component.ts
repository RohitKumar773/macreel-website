import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-portal-web-dev',
  templateUrl: './portal-web-dev.component.html',
  styleUrls: ['./portal-web-dev.component.scss']
})
export class PortalWebDevComponent {

  constructor(
    private _title: Title,
    private _meta: Meta
  ) {
    this._title.setTitle('Best Portal Web Development Company in Noida | Macreel Infosoft');
    this._meta.addTags([
      {
        name: 'description',
        content: "Discover the best portal web development company in Noida, delivering tailored solutions that enhance user experience and drive business growth. Get your custom portal today!"
      },
      {
        name: 'keywords',
        content: "Best Portal Web Development Company in Noida, Best Portal Web Development Company in India, Our Portal Web Development Services"
      },
      { name: 'author', content: 'Macreel Infosoft Pvt. Ltd.' },
      { name: 'distribution', content: 'global' },
      { name: 'language', content: 'English' },
      { name: 'rating', content: 'general' },
      { name: 'revisit-after', content: 'Daily' },
      { name: 'robots', content: 'ALL' },
      { name: 'googlebot', content: 'index, follow' },
      { name: 'bingbot', content: 'index, follow' },
      { name: 'reply-to', content: 'sales@macreel.co.in' },
      { name: 'coverage', content: 'Worldwide' }
    ]);
  }

}
