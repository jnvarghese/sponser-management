import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SponserComponent } from './sponser.component';
import { SponserDetailComponent } from './sponser-detail/sponser-detail.component'

export const sponserRoutes: Routes = [
    { path: 'sponsers', component: SponserComponent },
    { path: 'createSponser', component: SponserDetailComponent },
    { path: 'studentdetail/:id', component: SponserDetailComponent }    
  ];

export const sponserRoutingComponents = [SponserComponent, SponserDetailComponent];
