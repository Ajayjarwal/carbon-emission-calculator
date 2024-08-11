import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { HouseholdEmissionDetailsComponent } from './components/household-emission-details/household-emission-details.component';
import { CarUsageDetailsComponent } from './components/car-usage-details/car-usage-details.component';
import { MotorBikeUsagedetailsComponent } from './components/motor-bike-usage-details/motor-bike-usagedetails.component';
import { TravellingDetailsComponent } from './components/travelling-details/travelling-details.component';
import { WasteDetailsComponent } from './components/waste-details/waste-details.component';
import { OffsetsDetailsComponent } from './components/offsets-details/offsets-details.component';
import { ResultsComponent } from './components/results/results.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'details', component: DetailsComponent},
  { path: 'house-hold-details', component: HouseholdEmissionDetailsComponent},
  { path: 'car-usages', component: CarUsageDetailsComponent},
  { path: 'motor-bike-usage', component: MotorBikeUsagedetailsComponent},
  { path: 'travelling-details', component: TravellingDetailsComponent},
  { path: 'waste-details', component: WasteDetailsComponent},
  { path: 'offsets-details', component: OffsetsDetailsComponent},
  { path: 'results', component: ResultsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
