import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileApplicationComponent } from './mobile-application/mobile-application.component';
import { AndroidComponent } from './android/android.component';
import { IosComponent } from './ios/ios.component';
import { HybridComponent } from './hybrid/hybrid.component';

const routes: Routes = [
  { path: '', component: MobileApplicationComponent },
  { path: 'mobile_app', component: MobileApplicationComponent },
  { path: 'android', component: AndroidComponent },
  { path: 'ios', component: IosComponent },
  { path: 'hybrid', component: HybridComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MobileApplicationRoutingModule {}
