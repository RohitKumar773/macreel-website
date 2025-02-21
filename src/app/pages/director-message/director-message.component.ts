import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-director-message',
  templateUrl: './director-message.component.html',
  styleUrls: ['./director-message.component.scss']
})
export class DirectorMessageComponent {

  constructor(
    private _meta: Meta,
    private _title: Title
  ) {
    this._title.setTitle('Director Message | Macreel Infosoft Pvt. Ltd.');
    this._meta.addTags([
      {
        name: 'description',
        content: "Discover the vision and values that drive our leadership. Our director’s message highlights our commitment to excellence and innovation. Learn how we nurture a culture of growth and success."
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
