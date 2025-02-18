import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  name: string = '';
  email: string = '';
  phone: string = '';
  project: string = '';
  subject: string = '';
  message: string = '';

  onSubmit() {
    // Example of form submission handling
    console.log('Form Data:', {
      name: this.name,
      email: this.email,
      phone: this.phone,
      project: this.project,
      subject: this.subject,
      message: this.message
    });
    alert('Message sent successfully!');
  }
}

