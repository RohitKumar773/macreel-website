import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-custom-web-dev',
  templateUrl: './custom-web-dev.component.html',
  styleUrls: ['./custom-web-dev.component.scss']
})
export class CustomWebDevComponent {

  constructor(
    private _title: Title,
    private _meta: Meta
  ) {
    this._title.setTitle('Best Custom Web Development Company in Noida | Macreel Infosoft');
    this._meta.addTags([
      {
        name: 'description',
        content: "Discover Macreel Infosoft, the Best Custom Web Development Company in Noida, offering tailored web solutions that elevate your business online. Get in touch today!"
      },
      {
        name: 'keywords',
        content: "Best Custom Web Development Company in Noida, Top Custom Web Development Company in Noida, Best Custom Web Development Company in India, Best Custom Web Development in Noida"
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
