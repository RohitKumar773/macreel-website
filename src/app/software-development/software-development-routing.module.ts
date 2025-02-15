import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoftwareDevelopmentComponent } from './software-development/software-development.component';
import { CrmComponent } from './crm/crm.component';

const routes: Routes = [
  { path: '', component: SoftwareDevelopmentComponent },
  { path: 'softwaredev', component: SoftwareDevelopmentComponent },
  { path: 'crm', component: CrmComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoftwareDevelopmentRoutingModule {}
