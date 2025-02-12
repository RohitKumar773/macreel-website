import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { DirectorMessageComponent } from './director-message/director-message.component';
import { OrgStructureComponent } from './org-structure/org-structure.component';
import { VissonComponent } from './visson/visson.component';
import { ContactComponent } from './contact/contact.component';
import { BlogsComponent } from './blogs/blogs.component';

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'about', component: AboutComponent },
  { path: 'ourteam', component: OurTeamComponent },
  { path: 'directorMsg', component: DirectorMessageComponent },
  { path: 'orgStructure', component: OrgStructureComponent },
  { path: 'visson', component: VissonComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blogs', component: BlogsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
