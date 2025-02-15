import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebDevelopmentRoutingModule } from './web-development-routing.module';
import { WebDevelopmentComponent } from './web-development/web-development.component';
import { SwiperModule } from 'swiper/angular';
import { PortalWebDevComponent } from './portal-web-dev/portal-web-dev.component';
import { CustomWebDevComponent } from './custom-web-dev/custom-web-dev.component';
import { CmsWebDevComponent } from './cms-web-dev/cms-web-dev.component';


@NgModule({
  declarations: [
    WebDevelopmentComponent,
    PortalWebDevComponent,
    CustomWebDevComponent,
    CmsWebDevComponent
  ],
  imports: [
    CommonModule,
    WebDevelopmentRoutingModule,
    SwiperModule
  ]
})
export class WebDevelopmentModule { }
