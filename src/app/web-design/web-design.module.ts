import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebDesignRoutingModule } from './web-design-routing.module';
import { WebDesignComponent } from './web-design/web-design.component';
import { EcommerceWebComponent } from './ecommerce-web/ecommerce-web.component';
import { ResponsiveWebComponent } from './responsive-web/responsive-web.component';
import { StaticWebComponent } from './static-web/static-web.component';
import { DynamicWebComponent } from './dynamic-web/dynamic-web.component';
import { CustomWebComponent } from './custom-web/custom-web.component';
import { RedesignWebComponent } from './redesign-web/redesign-web.component';
import { SeoWebComponent } from './seo-web/seo-web.component';


@NgModule({
  declarations: [
    WebDesignComponent,
    EcommerceWebComponent,
    ResponsiveWebComponent,
    StaticWebComponent,
    DynamicWebComponent,
    CustomWebComponent,
    RedesignWebComponent,
    SeoWebComponent
  ],
  imports: [
    CommonModule,
    WebDesignRoutingModule
  ]
})
export class WebDesignModule { }
