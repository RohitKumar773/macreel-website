import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-google-ranking-service',
  templateUrl: './google-ranking-service.component.html',
  styleUrls: ['./google-ranking-service.component.scss']
})
export class GoogleRankingServiceComponent {

  constructor(
    private _title: Title,
    private _meta: Meta
  ) {
    this._title.setTitle('Best Google Ranking Services in India | Macreel Infosoft');
    this._meta.addTags([
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'keywords', content: 'Google Ranking Services, Google Ranking Services in Delhi, Google Ranking Services in India, Best Google Ranking Services, Top Google Ranking Services' },
      { name: 'description', content: "Boost your online visibility with Macreel Infosoft's top Google Ranking Services in Delhi NCR. Drive more traffic and improve your search rankings today!" },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Macreel Infosoft' },
      { name: 'language', content: 'English' },
      { property: 'og:title', content: 'Best Google Ranking Services in India | Macreel Infosoft' },
      { property: 'og:description', content: "Boost your online visibility with Macreel Infosoft's Google Ranking Services in Delhi NCR. Improve your search rankings today!" },
      { property: 'og:url', content: 'https://www.macreelinfosoft.com/' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://www.macreelinfosoft.com' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:title', content: 'Best Google Ranking Services in India' },
      { property: 'twitter:description', content: "Improve your search rankings with Macreel Infosoft's expert Google ranking services." },
      { property: 'twitter:image', content: 'https://www.macreelinfosoft.com' },
      { property: 'twitter:site', content: '@MacreelInfosoft' }
    ]);
  }

}
