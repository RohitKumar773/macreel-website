import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-software-development',
  templateUrl: './software-development.component.html',
  styleUrls: ['./software-development.component.scss']
})
export class SoftwareDevelopmentComponent {

  constructor(
    private _title: Title,
    private _meta: Meta
  ) {
    this._title.setTitle('Best Software Development Company in Noida | Macreel Infosoft');
    this._meta.addTags([
      {
        name: 'description',
        content: "For Every Business, Macreel Infosoft is the Best Software Development Company in Noida. Contact Us for more information: sales@macreel.co.in"
      },
      {
        name: 'keywords',
        content: "Best IT Company in Noida, best software development company in Noida, Top software development company in India, top software development company in Noida."
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
