import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ios',
  templateUrl: './ios.component.html',
  styleUrls: ['./ios.component.scss']
})
export class IosComponent {

  constructor(
    private _meta: Meta,
    private _title: Title
  ) {
    this._title.setTitle('Best iOS App Development Company in Noida | Macreel Infosoft ');
    this._meta.addTags([
      {
        name: 'description',
        content: "Top iOS app development company in Noida delivering custom, high-performance apps with cutting-edge technology. Elevate your business with our expert team!"
      },
      {
        name: 'keywords',
        content: "Best iOS App Development Company in Noida, Top iOS App Development Company in Noida, Best iOS Developers in Noida, Top iOS App Development Companies in India"
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
