import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeoRoutingModule } from './seo-routing.module';
import { SeoComponent } from './seo/seo.component';
import { OnPageSeoComponent } from './on-page-seo/on-page-seo.component';
import { OffPageSeoComponent } from './off-page-seo/off-page-seo.component';
import { LinkBuildingServiceComponent } from './link-building-service/link-building-service.component';
import { AppStoreOptimizationComponent } from './app-store-optimization/app-store-optimization.component';
import { EcommerceSeoComponent } from './ecommerce-seo/ecommerce-seo.component';
import { LocalSeoComponent } from './local-seo/local-seo.component';
import { TechnicalSeoComponent } from './technical-seo/technical-seo.component';
import { VideoSeoComponent } from './video-seo/video-seo.component';


@NgModule({
  declarations: [
    SeoComponent,
    OnPageSeoComponent,
    OffPageSeoComponent,
    LinkBuildingServiceComponent,
    AppStoreOptimizationComponent,
    EcommerceSeoComponent,
    LocalSeoComponent,
    TechnicalSeoComponent,
    VideoSeoComponent
  ],
  imports: [
    CommonModule,
    SeoRoutingModule
  ]
})
export class SeoModule { }
