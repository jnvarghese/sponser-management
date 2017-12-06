import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { InMemoryDataService } from './core/in-memory-data-service';
import { appRoutes } from './routes';
import {
  SponserComponent,
  SponserDetailComponent,
  StudentDetailComponent,
  StudentService,
  SponserService,
  DashboardComponent,
  PageNotFoundComponent,
  HeaderComponent,
  FooterComponent,
  JQ_TOKEN,
  EnrollmentComponent} from './feature/index';
import { appRoutingComponents, AppRoutingModule } from './index';

declare let jQuery: Object;

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    appRoutingComponents,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    EnrollmentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    // The HttpClientInMe,moryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ) // https://angular.io/tutorial/toh-pt6
  ],
  providers: [
    StudentService, 
    SponserService,
    { provide: JQ_TOKEN, useValue: jQuery },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
