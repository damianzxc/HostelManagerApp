import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LastActionsComponent } from './dashboard/last-actions/last-actions.component';
import { HostelOccupancyComponent } from './dashboard/hostel-occupancy/hostel-occupancy.component';
import { UpcomingRentalComponent } from './dashboard/upcoming-rental/upcoming-rental.component';
import { NewReservationComponent } from './reservation/new-reservation/new-reservation.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LastActionsComponent,
    HostelOccupancyComponent,
    UpcomingRentalComponent,
    NewReservationComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
