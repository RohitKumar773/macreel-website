import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cms-web-dev',
  templateUrl: './cms-web-dev.component.html',
  styleUrls: ['./cms-web-dev.component.scss']
})
export class CmsWebDevComponent {

  constructor(
    private _title: Title,
    private _meta: Meta
  ) {
    this._title.setTitle('Top CMS Web Development Services in Noida | Macreel Infosoft');
    this._meta.addTags([
      {
        name: 'description',
        content: "Discover Top CMS Web Development Services in Noida with Macreel Infosoft. Expertly crafted, user-friendly websites to elevate your business. Contact us today!"
      },
      {
        name: 'keywords',
        content: "CMS Web Development Services in Delhi, CMS Website Development in India, Website Development Company India"
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
