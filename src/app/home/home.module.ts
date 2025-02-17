import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { ContainerComponent } from './container/container.component';
import { MatButtonModule } from '@angular/material/button';
import { SwiperModule } from 'swiper/angular';
import { MatDialogModule } from '@angular/material/dialog';
import { EnquiryFormComponent } from './enquiry-form/enquiry-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
    EnquiryFormComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatIconModule,
    MatButtonModule,
    SwiperModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class HomeModule {}
