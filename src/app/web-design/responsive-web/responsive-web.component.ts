import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-responsive-web',
  templateUrl: './responsive-web.component.html',
  styleUrls: ['./responsive-web.component.scss']
})
export class ResponsiveWebComponent {

  constructor(
    private _title: Title,
    private _meta: Meta
  ) {
    this._title.setTitle('Best Responsive Web Design Company in India | Macreel Infosoft');
    this._meta.addTags([
      {
        name: 'description',
        content: "Get the best responsive web design service that adapts seamlessly across devices, ensuring your website looks great and functions flawlessly on any screen size."
      },
      {
        name: 'keywords',
        content: "Best Responsive Web Designing Company in India, Best Responsive Web Designing Service, Best Responsive Website Design Company in Noida, Best Responsive Web Design Company in India"
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
