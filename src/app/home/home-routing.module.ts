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
        path:'',component:ContainerComponent
      },
      {
        path: 'pages',
        loadChildren: () => import('../pages/pages.module').then( m => m.PagesModule)
      },
      {
        path: 'webdesign',
        loadChildren: () => import('../web-design/web-design.module').then( d => d.WebDesignModule)
      },
      {
        path: 'webdevelopment',
        loadChildren: () => import('../web-development/web-development.module').then( w => w.WebDevelopmentModule)
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
