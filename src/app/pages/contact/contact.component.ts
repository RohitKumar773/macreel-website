import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactForm!: FormGroup;


  constructor(
    private _meta: Meta,
    private _title: Title,
    private fb: FormBuilder,
    private services: ServicesService
  ) {
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

    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      subject: ['', Validators.required],
      service: ['', Validators.required],
    });
  }

  sendContact() {
    if (this.contactForm.valid) {
      this.services.sendContactDetails(this.contactForm.value).subscribe(
        (res) => {
          this.services.ToastSuccess('Thanks for reaching out! We’ve received your enquiry and will get in touch with you shortly.');
          this.contactForm.reset()
        },
        (err: Error) => {
          this.services.ToastDanger('Message could not be sent.');
        }
      )
    }
    else {
      this.services.ToastWarning('Please Fill All The Required Fields');
    }

  }

}
