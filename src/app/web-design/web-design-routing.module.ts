import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebDesignComponent } from './web-design/web-design.component';
import { RedesignWebComponent } from './redesign-web/redesign-web.component';
import { StaticWebComponent } from './static-web/static-web.component';
import { ResponsiveWebComponent } from './responsive-web/responsive-web.component';
import { EcommerceWebComponent } from './ecommerce-web/ecommerce-web.component';
import { DynamicWebComponent } from './dynamic-web/dynamic-web.component';
import { CustomWebComponent } from './custom-web/custom-web.component';
import { SeoWebComponent } from './seo-web/seo-web.component';

const routes: Routes = [
  { path: '', component: WebDesignComponent },
  { path: 'webdesign', component: WebDesignComponent },
  { path: 'webRedesign', component: RedesignWebComponent },
  { path: 'staticWeb', component: StaticWebComponent },
  { path: 'responsiveWeb', component: ResponsiveWebComponent },
  { path: 'ecommerceWeb', component: EcommerceWebComponent },
  { path: 'dynamicWeb', component: DynamicWebComponent },
  { path: 'customWeb', component: CustomWebComponent },
  { path: 'seoWeb', component: SeoWebComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebDesignRoutingModule {}
