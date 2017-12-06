import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  PageNotFoundComponent,
  DashboardComponent,
  studentRoutes,
  sponserRoutes,
  sponserRoutingComponents,
  studentRoutingComponents,
  EnrollmentComponent} from './feature/index';

export const appRoutes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    { path: 'dashboard', component: DashboardComponent },      
    { path: 'enroll', component: EnrollmentComponent },
    ...studentRoutes,
    ...sponserRoutes,
    { path: '**', component: PageNotFoundComponent }
  ];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { enableTracing: true })],
    exports: [RouterModule],
})
export class AppRoutingModule { }
export const appRoutingComponents = [
  DashboardComponent,
  EnrollmentComponent,
  PageNotFoundComponent,
  studentRoutingComponents,
  sponserRoutingComponents
];
