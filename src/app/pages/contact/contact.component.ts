import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  phone: string = '';
  project: string = '';
  subject: string = '';
  message: string = '';

  constructor(private _meta: Meta, private _title: Title) {
    this._title.setTitle(
      'Macreel Infosoft - Contact Us | Best IT Solution Company'
    );
    this._meta.addTags([
      {
        name: 'description',
        content:
          'Contact the best IT company in Noida to get the best and most affordable mobile app development, website design and development, software development and digital marketing.',
      },
      {
        name: 'keywords',
        content: '',
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
      { name: 'coverage', content: 'Worldwide' },
    ]);
  }

  onSubmit() {
    // Example of form submission handling
    console.log('Form Data:', {
      name: this.name,
      email: this.email,
      phone: this.phone,
      project: this.project,
      subject: this.subject,
      message: this.message,
    });
    alert('Message sent successfully!');
  }
}
