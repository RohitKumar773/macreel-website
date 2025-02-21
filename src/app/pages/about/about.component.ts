import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: false,
})
export class AboutComponent {
  constructor(private _meta: Meta, private _title: Title) {
    this._title.setTitle(
      'Macreel Infosoft - About Us | Best IT Solution Company in Noida'
    );
    this._meta.addTags([
      {
        name: 'description',
        content:
          'Macreel Infosoft Pvt. Ltd. is the Best Software Development Company in India, Explore the expertise of the best IT solution company in Noida. Specialize in Website Design, Development, Software, Mobile App Development, and Digital Marketing.',
      },
      {
        name: 'keywords',
        content:
          'Web Development Company, Web Development Company In Delhi, Web Development Company In India, Website Development In Delhi, Website Development Company India, Web Development Companies In India, Web Development Services In Delhi, Web Development Services In India, Best Web Development Services In Delhi, Best Web Development Services In India, Web Development Services Delhi, Web Development Services India',
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
      { name: 'coverage', content: 'Worldwide' },
    ]);
  }
}
