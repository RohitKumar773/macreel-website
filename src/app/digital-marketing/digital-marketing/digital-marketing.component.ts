import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-digital-marketing',
  templateUrl: './digital-marketing.component.html',
  styleUrls: ['./digital-marketing.component.scss']
})
export class DigitalMarketingComponent {

  constructor(
    private _title: Title,
    private _meta: Meta
  ) {
    this._title.setTitle('Best Digital Marketing Company in Noida | Macreel Infosoft');
    this._meta.addTags([
      { name: 'description', content: 'Looking for the best digital marketing company in Noida? Macreel is the best company to rank your website at the top of SERP and increase your online presence.' },
      { name: 'keywords', content: 'Best Digital Marketing Company, Best Digital Marketing Agency in Delhi NCR, Top Digital Marketing Company in India, Best Digital Marketing Service Company in Noida, SEO Agency in Noida, SMO Services in Noida' },
      { name: 'author', content: 'Macreel Infosoft Pvt. Ltd.' },
      { name: 'distribution', content: 'global' },
      { name: 'language', content: 'English' },
      { name: 'rating', content: 'general' },
      { name: 'revisit-after', content: 'Daily' },
      { name: 'robots', content: 'index, follow' },
      { name: 'googlebot', content: 'index, follow' },
      { name: 'bingbot', content: 'index, follow' },
      { name: 'reply-to', content: 'sales@macreel.co.in' },
      { name: 'coverage', content: 'Worldwide' }
    ]);
  }
}
