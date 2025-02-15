import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobileApplicationRoutingModule } from './mobile-application-routing.module';
import { MobileApplicationComponent } from './mobile-application/mobile-application.component';
import { AndroidComponent } from './android/android.component';
import { IosComponent } from './ios/ios.component';
import { HybridComponent } from './hybrid/hybrid.component';


@NgModule({
  declarations: [
    MobileApplicationComponent,
    AndroidComponent,
    IosComponent,
    HybridComponent
  ],
  imports: [
    CommonModule,
    MobileApplicationRoutingModule
  ]
})
export class MobileApplicationModule { }
