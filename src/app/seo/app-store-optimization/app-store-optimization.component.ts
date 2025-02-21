import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-app-store-optimization',
  templateUrl: './app-store-optimization.component.html',
  styleUrls: ['./app-store-optimization.component.scss']
})
export class AppStoreOptimizationComponent {

  constructor(
    private _title: Title,
    private _meta: Meta
  ) {
    this._title.setTitle('Best App Store Optimization Service in India | Macreel Infosoft');
    this._meta.addTags([
      {
        name: 'description',
        content: "Boost your app's visibility with Macreel Infosoft's top App Store Optimization service in India. Drive downloads and improve rankings today!"
      },
      {
        name: 'keywords',
        content: "Best App Store Optimisation Service in India, Best App Store Optimisation Service in Noida, Top ASO Experts in India, Best App Store Optimization Company in Delhi NCR, Best ASO Strategy Services India"
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
