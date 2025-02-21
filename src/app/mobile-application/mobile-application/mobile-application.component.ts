import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-mobile-application',
  templateUrl: './mobile-application.component.html',
  styleUrls: ['./mobile-application.component.scss']
})
export class MobileApplicationComponent {

  constructor(
    private _title: Title,
    private _meta: Meta
  ) {
    this._title.setTitle('Best Mobile App Development Company in Noida | Macreel Infosoft');
    this._meta.addTags([
      {
        name: 'description',
        content: "Macreel is the Best Mobile App Development Company in Noida for Enterprise & Startups with good quality android, iOS, and web app development services."
      },
      {
        name: 'keywords',
        content: "best IT Company in Noida, best mobile app development company in India, top mobile app development company in India, android development company in Noida, iOS development company in Noida, best web app development company in Noida."
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
