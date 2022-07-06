import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { AuthGuardsGuard } from 'src/app/guards/auth-guards.guard';
import { RecruiterDashboardComponent } from './recruiter-dashboard/recruiter-dashboard.component';
import { RecruiterHomeComponent } from './recruiter-dashboard/recruiter-home/recruiter-home.component';
import {  ViewDetailsComponent } from './recruiter-dashboard/view-details/view-details.component';

const routes: Routes = [
  { path: "", component: RecruiterDashboardComponent,
  // canActivate:[AuthGuardsGuard],
  children:[
    {path:"home", component: RecruiterHomeComponent},
    {path:"viewDetails", component:ViewDetailsComponent},
  ]},
];

@NgModule({
  declarations: [
    RecruiterDashboardComponent,
    RecruiterHomeComponent,
    ViewDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RecruiterModule { }
