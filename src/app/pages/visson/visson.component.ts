import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-visson',
  templateUrl: './visson.component.html',
  styleUrls: ['./visson.component.scss']
})
export class VissonComponent {

  constructor(
    private _meta: Meta,
    private _title: Title
  ) {
    this._title.setTitle('Vision and Mission | Macreel Infosoft');
    this._meta.addTags([
      {
        name: 'description',
        content: "Discover our Vision and Mission, driving business growth through innovation and excellence. We empower businesses to reach new heights by delivering tailored solutions that align with your goals."
      },
      { name: 'keywords', content: '' },
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
