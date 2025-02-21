import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-seo-website-promotion',
  templateUrl: './seo-website-promotion.component.html',
  styleUrls: ['./seo-website-promotion.component.scss']
})
export class SeoWebsitePromotionComponent {

  constructor(
    private _meta: Meta,
    private _title: Title
  ) {
    this._title.setTitle('Best SEO Website Promotion | Macreel Infosoft');
    this._meta.addTags([
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'keywords', content: 'SEO Website Promotion, SEO Website Promotion in Delhi, SEO Website Promotion in India, Best SEO Website Promotion, Top SEO Website Promotion' },
      { name: 'description', content: "Boost your online presence with top SEO website promotion services in Delhi NCR by Macreel Infosoft. Drive traffic, increase rankings, and achieve your business goals!" },
      { name: 'robots', content: 'index, follow' }, // Ensures search engines index and follow links
      { name: 'author', content: 'Macreel Infosoft' },
      { name: 'language', content: 'English' },
      { property: 'og:title', content: 'Best SEO Website Promotion | Macreel Infosoft' },
      { property: 'og:description', content: "Enhance your website’s visibility with expert SEO website promotion services by Macreel Infosoft. Improve rankings and drive targeted traffic." },
      { property: 'og:url', content: 'https://www.macreelinfosoft.com/' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://www.macreelinfosoft.com/assets/images/seo-website-promotion.jpg' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:title', content: 'Best SEO Website Promotion' },
      { property: 'twitter:description', content: 'Macreel Infosoft offers top-notch SEO website promotion services to help your business grow. Drive more traffic and boost your rankings today!' },
      { property: 'twitter:image', content: 'https://www.macreelinfosoft.com/assets/images/seo-website-promotion.jpg' },
      { property: 'twitter:site', content: '@MacreelInfosoft' }

    ]);
  }

}
