import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { AboutComponent } from './about/about.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { DirectorMessageComponent } from './director-message/director-message.component';
import { OrgStructureComponent } from './org-structure/org-structure.component';
import { VissonComponent } from './visson/visson.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactComponent } from './contact/contact.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { SwiperModule } from 'swiper/angular';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import { PrivacyComponent } from './privacy/privacy.component';

@NgModule({
  declarations: [
    AboutComponent,
    AboutComponent,
    OurTeamComponent,
    DirectorMessageComponent,
    OrgStructureComponent,
    VissonComponent,
    BlogsComponent,
    ContactComponent,
    TermsConditionComponent,
    PrivacyComponent,
    
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatIconModule,
    MatButtonModule,
    SwiperModule
  ]
})
export class PagesModule { }
