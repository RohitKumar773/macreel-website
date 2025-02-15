import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ContainerComponent } from './container/container.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    children: [
      {
        path: '',
        component: ContainerComponent,
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('../pages/pages.module').then((m) => m.PagesModule),
      },
      {
        path: 'webdesign',
        loadChildren: () =>
          import('../web-design/web-design.module').then(
            (d) => d.WebDesignModule
          ),
      },
      {
        path: 'webdevelopment',
        loadChildren: () =>
          import('../web-development/web-development.module').then(
            (w) => w.WebDevelopmentModule
          ),
      },
      {
        path: 'softwaredevelopment',
        loadChildren: () =>
          import('../software-development/software-development.module').then(
            (s) => s.SoftwareDevelopmentModule
          ),
      },
      {
        path: 'mobiledevelopment',
        loadChildren: () =>
          import('../mobile-application/mobile-application.module').then(
            (m) => m.MobileApplicationModule
          ),
      },
      {
        path: 'seo',
        loadChildren: () =>
          import('../seo/seo.module').then((s) => s.SeoModule),
      },
      {
        path: 'digitalmarketing',
        loadChildren: () =>
          import('../digital-marketing/digital-marketing.module').then(
            (d) => d.DigitalMarketingModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
