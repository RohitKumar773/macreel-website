import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebDevelopmentComponent } from './web-development/web-development.component';
import { PortalWebDevComponent } from './portal-web-dev/portal-web-dev.component';
import { CustomWebDevComponent } from './custom-web-dev/custom-web-dev.component';
import { CmsWebDevComponent } from './cms-web-dev/cms-web-dev.component';

const routes: Routes = [
  { path: '', component: WebDevelopmentComponent },
  { path: 'webDeve', component: WebDevelopmentComponent },
  { path: 'portalWeb', component: PortalWebDevComponent },
  { path: 'custom_web', component: CustomWebDevComponent },
  { path: 'cms_web', component: CmsWebDevComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebDevelopmentRoutingModule {}
