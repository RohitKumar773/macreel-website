import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { ContainerComponent } from './container/container.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, MatIconModule, MatButtonModule],
})
export class HomeModule {}
