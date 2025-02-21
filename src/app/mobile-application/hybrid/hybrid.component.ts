import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-hybrid',
  templateUrl: './hybrid.component.html',
  styleUrls: ['./hybrid.component.scss']
})
export class HybridComponent {

  constructor(
    private _title: Title,
    private _meta: Meta
  ) {
    this._title.setTitle('Top Hybrid Application Development Company in Noida | Macreel Infosoft');
    this._meta.addTags([
      {
        name: 'description',
        content: "Top Hybrid Application Development Company in Noida | Macreel Infosoft: Expert in creating innovative, cross-platform apps with seamless user experience."
      },
      {
        name: 'keywords',
        content: "Best Hybrid Applications Development Company in India, Best Hybrid Applications Development Company in Noida"
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
