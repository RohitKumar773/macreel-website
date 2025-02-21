import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-static-web',
  templateUrl: './static-web.component.html',
  styleUrls: ['./static-web.component.scss']
})
export class StaticWebComponent {

  constructor(
    private _title: Title,
    private _meta: Meta
  ) {
    this._title.setTitle('Top Static Web Designing Company in Noida | Macreel Infosoft');
    this._meta.addTags([
      {
        name: 'description',
        content: "Top Static Web Designing Company in Noida. Specializing in custom, responsive designs for small enterprises. Get visually appealing, fast-loading websites at affordable rates."
      },
      {
        name: 'keywords',
        content: "Best Static Website Designing Company in Noida, Top Static Web Designing Company in Noida"
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
