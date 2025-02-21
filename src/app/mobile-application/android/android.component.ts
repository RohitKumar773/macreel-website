import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-android',
  templateUrl: './android.component.html',
  styleUrls: ['./android.component.scss']
})
export class AndroidComponent {

  constructor(
    private _meta: Meta,
    private _title: Title
  ) {
    this._title.setTitle('Android Application Development Company in Noida');
    this._meta.addTags([
      {
        name: 'description',
        content: "Looking for top-notch Android application development in Noida? Macreel Infosoft delivers innovative, user-friendly apps tailored to your business needs. Contact us today!"
      },
      {
        name: 'keywords',
        content: "Best Android Application Development Company in Noida, Macreel Infosoft for Android App Development, Best Custom Android App Development Company in Noida, Android App Development Services"
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
