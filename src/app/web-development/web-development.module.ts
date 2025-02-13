import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebDevelopmentRoutingModule } from './web-development-routing.module';
import { WebDevelopmentComponent } from './web-development/web-development.component';
import { SwiperModule } from 'swiper/angular';


@NgModule({
  declarations: [
    WebDevelopmentComponent
  ],
  imports: [
    CommonModule,
    WebDevelopmentRoutingModule,
    SwiperModule
  ]
})
export class WebDevelopmentModule { }
