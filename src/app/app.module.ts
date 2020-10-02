import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCertificationComponent } from './add-certification/add-certification.component';
import { ViewCertificationComponent } from './view-certification/view-certification.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { StatsCertificationComponent } from './stats-certification/stats-certification.component';
import { ComkartServiceService } from './comkart-service.service';
import { TestConnectionComponent } from './test-connection/test-connection.component';
import { StatsCertificationDougnutComponent } from './stats-certification/stats-certification-dougnut/stats-certification-dougnut.component';
import { StatsCertificationBarchartComponent } from './stats-certification/stats-certification-barchart/stats-certification-barchart.component';
import { StatsCertificationPiechartComponent } from './stats-certification/stats-certification-piechart/stats-certification-piechart.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCertificationComponent,
    ViewCertificationComponent,
    WelcomeComponent,
    StatsCertificationComponent,
    TestConnectionComponent,
    StatsCertificationDougnutComponent,
    StatsCertificationBarchartComponent,
    StatsCertificationPiechartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartsModule,
    RouterModule.forRoot([
      {path: 'addcertificate', component: AddCertificationComponent},
      {path: 'viewcertificate' , component: ViewCertificationComponent},
      {path: 'stats-certificate', component: StatsCertificationComponent },
      {path: 'test-connection', component: TestConnectionComponent },
      {path: 'stats-certificate/dougnut', component: StatsCertificationDougnutComponent },
      {path: 'stats-certificate/pie-chart', component: StatsCertificationPiechartComponent },
      {path: 'stats-certificate/bar-chart', component: StatsCertificationBarchartComponent },
      {path: 'welcome', component: WelcomeComponent },
      {path: '', redirectTo:'welcome', pathMatch:'full'},
      {path:'**', redirectTo:'welcome', pathMatch:'full'}

  ])
  ],
  providers: [ComkartServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
