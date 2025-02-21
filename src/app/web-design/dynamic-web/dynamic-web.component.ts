import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dynamic-web',
  templateUrl: './dynamic-web.component.html',
  styleUrls: ['./dynamic-web.component.scss']
})
export class DynamicWebComponent {

  constructor(
    private _title: Title,
    private _meta: Meta
  ) {
    this._title.setTitle('Best Dynamic Web Designing Company in Noida | Macreel Infosoft');
    this._meta.addTags([
      {
        name: 'description',
        content: "Best Dynamic Web Designing creates interactive, responsive websites that adapt seamlessly to user behavior and preferences, delivering personalized content and enhanced user experiences in real-time."
      },
      {
        name: 'keywords',
        content: "Best Dynamic Web Designing Company in Noida, Top Website Design & Development Company in Noida, Dynamic Web Design, Best Dynamic Web Designing Company in India"
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
