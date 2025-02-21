import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-custom-web',
  templateUrl: './custom-web.component.html',
  styleUrls: ['./custom-web.component.scss']
})
export class CustomWebComponent {

  constructor(
    private _title: Title,
    private _meta: Meta
  ) {
    this._title.setTitle('Best Custom Web Designing Company | Macreel Infosoft');
    this._meta.addTags([
      {
        name: 'description',
        content: "Enhance your online presence with our custom web designing services for a unique, user-friendly experience. Macreel Infosoft Pvt. Ltd."
      },
      {
        name: 'keywords',
        content: "Best Custom Web Designing Company in Noida, Top Custom Web Designing Company in Noida, Best Custom Web Designing Company in Delhi NCR, Best Custom Web Designing Company in India, Top Custom Web Designing Company in India"
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
