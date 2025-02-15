import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeoComponent } from './seo/seo.component';
import { OnPageSeoComponent } from './on-page-seo/on-page-seo.component';
import { OffPageSeoComponent } from './off-page-seo/off-page-seo.component';
import { VideoSeoComponent } from './video-seo/video-seo.component';
import { TechnicalSeoComponent } from './technical-seo/technical-seo.component';
import { LocalSeoComponent } from './local-seo/local-seo.component';
import { LinkBuildingServiceComponent } from './link-building-service/link-building-service.component';
import { EcommerceSeoComponent } from './ecommerce-seo/ecommerce-seo.component';
import { AppStoreOptimizationComponent } from './app-store-optimization/app-store-optimization.component';

const routes: Routes = [
  { path: '', component: SeoComponent },
  { path: 'seo_opt', component: SeoComponent },
  { path: 'onpage', component: OnPageSeoComponent },
  { path: 'offpage', component: OffPageSeoComponent },
  { path: 'videoseo', component: VideoSeoComponent },
  { path: 'technicalseo', component: TechnicalSeoComponent },
  { path: 'local_seo', component: LocalSeoComponent },
  { path: 'link_building', component: LinkBuildingServiceComponent },
  { path: 'ecommerce', component: EcommerceSeoComponent },
  { path: 'appstore', component: AppStoreOptimizationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeoRoutingModule {}
