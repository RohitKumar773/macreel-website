import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-enquiry-form',
  templateUrl: './enquiry-form.component.html',
  styleUrls: ['./enquiry-form.component.scss']
})
export class EnquiryFormComponent {
  enquiryForm!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private service: ServicesService,
    private matref: MatDialogRef<EnquiryFormComponent>,
  ) {
    this.enquiryForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      subject: ['', Validators.required]
    });
  }


  sendEmail() {
    if (this.enquiryForm.valid) {
      console.log(this.enquiryForm.value);
      this.service.sendEmail(this.enquiryForm.value).subscribe(
        (res) => {
          this.service.ToastSuccess('Thanks for reaching out! We’ve received your enquiry and will get in touch with you shortly.')
          this.matref.close()
        },
        (err: Error) => {
          console.log(err);
          this.service.ToastDanger('Message could not be sent.');
        }
      )
    }
    else {
      this.service.ToastWarning('Please Fill All The Required Fields');
    }

  }

}
