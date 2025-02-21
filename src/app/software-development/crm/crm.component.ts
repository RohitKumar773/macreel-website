import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-crm',
  templateUrl: './crm.component.html',
  styleUrls: ['./crm.component.scss']
})
export class CrmComponent {

  constructor(
    private _title: Title,
    private _meta: Meta
  ) {
    this._title.setTitle('Best CRM Software Development Company in Noida');
    this._meta.addTags([
      {
        name: 'description',
        content: "Leading CRM software development company in Noida, Macreel Infosoft delivers tailored solutions to boost customer engagement, streamline operations, and drive business growth."
      },
      {
        name: 'keywords',
        content: "Best Software Development Company in Noida, Best CRM Software Development Company in Noida, Macreel Infosoft for CRM Development, Best CRM Software Development Service in India, CRM Software for Your Business"
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
