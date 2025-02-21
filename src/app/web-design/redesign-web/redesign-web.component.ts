import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-redesign-web',
  templateUrl: './redesign-web.component.html',
  styleUrls: ['./redesign-web.component.scss']
})
export class RedesignWebComponent {

  constructor(
    private _title: Title,
    private _meta: Meta
  ) {
    this._title.setTitle('Best Website Redesign Services in Noida | Macreel Infosoft');
    this._meta.addTags([
      {
        name: 'description',
        content: "Transform your outdated site with our Website Redesign Services. Get a sleek, modern look that enhances user experience and boosts your online performance."
      },  
      {
        name: 'keywords',
        content: "Top Website Redesign Services in Noida, Top-notch Website Redesign Services in Noida, Best Website Redesign Services in Noida"
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
