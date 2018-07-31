import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';

import { RouterModule, Routes } from '@angular/router';
import { SaloonComponent } from './saloon/saloon.component';

const route:Routes = [{
  path: 'saloon',
  component: SaloonComponent
}, {
  path: 'saloon/dashboard',
  component: DashboardComponent
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild (route)
  ],
  declarations: [DashboardComponent, SaloonComponent]
})
export class SaloonModule { }
