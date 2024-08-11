import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HouseholdEmissionDetailsComponent } from './components/household-emission-details/household-emission-details.component';
import { CarUsageDetailsComponent } from './components/car-usage-details/car-usage-details.component';
import { MotorBikeUsagedetailsComponent } from './components/motor-bike-usage-details/motor-bike-usagedetails.component';
import { TravellingDetailsComponent } from './components/travelling-details/travelling-details.component';
import { WasteDetailsComponent } from './components/waste-details/waste-details.component';
import { OffsetsDetailsComponent } from './components/offsets-details/offsets-details.component';
import { HttpClientModule } from '@angular/common/http';
import { ResultsComponent } from './components/results/results.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    HouseholdEmissionDetailsComponent,
    CarUsageDetailsComponent,
    MotorBikeUsagedetailsComponent,
    TravellingDetailsComponent,
    WasteDetailsComponent,
    OffsetsDetailsComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
