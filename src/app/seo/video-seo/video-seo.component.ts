import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-video-seo',
  templateUrl: './video-seo.component.html',
  styleUrls: ['./video-seo.component.scss']
})
export class VideoSeoComponent {

  constructor(
    private _title: Title,
    private _meta: Meta
  ) {
    this._title.setTitle('Best Video SEO Service Provider in India | Macreel Infosoft');

    // Set meta tags dynamically
    this._meta.addTags([
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'keywords', content: 'Best Video SEO Service Provider in India, Top Video SEO Solutions Provider in India, Best SEO Agency in Noida, Top Video SEO Service Provider in Noida' },
      { name: 'description', content: 'Boost your visibility with Macreel, India’s top Video SEO service provider. Expert strategies for higher rankings and more views. Get noticed today!' },
      { name: 'robots', content: 'index, follow' },
      { name: 'googlebot', content: 'index, follow' },
      { name: 'bingbot', content: 'index, follow' }
    ]);
  }

}
