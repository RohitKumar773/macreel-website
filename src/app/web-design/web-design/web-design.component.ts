import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-web-design',
  templateUrl: './web-design.component.html',
  styleUrls: ['./web-design.component.scss']
})
export class WebDesignComponent {

  constructor(
    private _meta: Meta,
    private _title: Title
  ) {
    this._title.setTitle('Best Website Developments Company in Noida- Macreel Infosoft');
    this._meta.addTags([
      {
        name: 'description',
        content: "Explore top-notch website design & development services at Macreel Infosoft, the best website development company in Noida."
      },
      {
        name: 'keywords',
        content: "Best Web Designing Company in Delhi NCR, Noida, Best Website Designing Company in Noida, Top website Designing Company in Noida, Best Website Designing Company in Delhi NCR, Best Website Designing Company in India"
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
