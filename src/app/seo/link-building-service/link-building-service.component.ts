import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-link-building-service',
  templateUrl: './link-building-service.component.html',
  styleUrls: ['./link-building-service.component.scss']
})
export class LinkBuildingServiceComponent {

  constructor(
    private _title: Title,
    private _meta: Meta
  ) {
    this._title.setTitle('Best Link Building Company in India | Macreel Infosoft');
    this._meta.addTags([
      {
        name: 'description',
        content: "Boost your online presence with expert link building services from Macreel Infosoft. Enhance SEO and drive traffic with our strategic solutions. Contact us today!"
      },
      {
        name: 'keywords',
        content: "Best Link Building Company in India, Top Link-Building Service Provider in Noida, Best Link-Building Service in India, Best SEO services in India, Best Link-Building Service"
      },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'author', content: 'Macreel Infosoft Pvt. Ltd.' },
      { name: 'robots', content: 'index, follow' },
      { name: 'googlebot', content: 'index, follow' },
      { name: 'bingbot', content: 'index, follow' }
    ]);
  }

}
