import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddDetailsService } from '../../services/add-details.service';
import { WasteDetails } from '../../models/WasteDetails.model';
import { TravellingDetails } from '../../models/TravellingDetails.model';
import { OffsetsDetails } from '../../models/OffsetsDetails.model';
import { MotorBikeUsageDetails } from '../../models/MoterBikeUsageDetails.model';
import { HouseHoldEmissionDetails } from '../../models/HouseHoldEmissionDetails.model';
import { UserDetails } from '../../models/UserDetails.model';
import { CarUsageDetails } from '../../models/CarUsageDetails.model';
import { EmissionDetails } from '../../models/EmissionDetails.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent implements OnInit {
  ngOnInit(): void {
    
    this.calCof();

    const temp1 = this.addService.preWasteDetails();
    if (temp1) this.wasteData = temp1;
    const temp2 = this.addService.preTravellingDetails();
    if(temp2)this.travellingData = temp2;
    const temp3 = this.addService.preOffsetsDetails();
    if (temp3) this.offsetData = temp3;
    const temp4 = this.addService.preBikeDetails();
    if(temp4)this.bikeData=temp4;
    const temp5 = this.addService.preHHDetails();
    if (temp5) this.hHData = temp5;
    const temp6 = this.addService.preUserDetails();
    if(temp6)this.userData= temp6;
    const temp7 = this.addService.preCarDetails();
    if(temp7)this.carData = temp7;

    console.log(this.offsetData);

    this.calEmission();
    
  }

  private cof: {[key: string]: {[key: string]: {[key: number]: {[key:number]: number}}}} = {};
  private bcof: {[key: number]: {[key:number]: number}} = {};

  private userData?: UserDetails;
  private hHData?: HouseHoldEmissionDetails;
  private carData?: CarUsageDetails;
  private bikeData?: MotorBikeUsageDetails;
  private travellingData?: TravellingDetails;
  private wasteData?: WasteDetails;
  private offsetData?: OffsetsDetails;
  public emissions: EmissionDetails;

  constructor(
    private router: Router,
    private addService: AddDetailsService
  ) {
      this.wasteData = new WasteDetails(undefined, undefined, undefined, undefined);
      this.travellingData = new TravellingDetails(undefined, undefined, undefined, undefined, undefined);
      this.offsetData = new OffsetsDetails(undefined, undefined, undefined, undefined, undefined);
      this.bikeData = new MotorBikeUsageDetails(undefined,undefined,'',undefined,undefined,undefined);
      this.hHData = new HouseHoldEmissionDetails(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
      this.userData = new UserDetails('',undefined,undefined,undefined);
      this.carData = new CarUsageDetails(undefined,undefined,'','',undefined,undefined,undefined);
      this.emissions = new EmissionDetails(0,0,0,0,0,0,0);
      this.cof = {};
    }

    calCof() {
      // Initialize the bcof object
      this.bcof[100] = {};
      this.bcof[150] = {};
      this.bcof[200] = {};
      this.bcof[300] = {};
      this.bcof[500] = {};
  
      this.bcof[100][0] = 0.0358;
      this.bcof[100][1] = 0.0325;
      this.bcof[150][0] = 0.0319;
      this.bcof[150][1] = 0.0290;
      this.bcof[200][0] = 0.0458;
      this.bcof[200][1] = 0.0417;
      this.bcof[300][0] = 0.0595;
      this.bcof[300][1] = 0.0540;
      this.bcof[500][0] = 0.0597;
      this.bcof[500][1] = 0.0542;
  
      // Initialize the cof object for each vehicle type and fuel type
      const vehicleTypes = ['Sedan', 'SUV', 'Hatchback', 'Commercial Vehicle'];
      const fuelTypes = ['Petrol', 'Diesel', 'CNG', 'Hybrid', 'Electric'];
  
      vehicleTypes.forEach(vehicle => {
          this.cof[vehicle] = {};
          fuelTypes.forEach(fuel => {
              this.cof[vehicle][fuel] = {};
          });
      });
  
      // Sedan - Petrol
      this.cof["Sedan"]["Petrol"][1.5] = [0.153, 0.142];
      this.cof['Sedan']['Petrol'][2] = [0.161, 0.149];
      this.cof['Sedan']['Petrol'][3] = [0.207, 0.191];
      this.cof['Sedan']['Petrol'][4] = [0.270, 0.250];
      this.cof['Sedan']['Petrol'][0] = [0, 0];
  
      // Sedan - Diesel
      this.cof['Sedan']['Diesel'][1.5] = [0.131, 0.121];
      this.cof['Sedan']['Diesel'][2] = [0.160, 0.148];
      this.cof['Sedan']['Diesel'][3] = [0.248, 0.230];
      this.cof['Sedan']['Diesel'][4] = [0.248, 0.230];
      this.cof['Sedan']['Diesel'][0] = [0, 0];
  
      // Sedan - CNG
      this.cof['Sedan']['CNG'][1.5] = [1, 1];
      this.cof['Sedan']['CNG'][2] = [1, 1];
      this.cof['Sedan']['CNG'][3] = [1, 1];
      this.cof['Sedan']['CNG'][4] = [1, 1];
      this.cof['Sedan']['CNG'][0] = [0, 0];
  
      // Sedan - Hybrid
      this.cof['Sedan']['Hybrid'][1.5] = [1, 0.087];
      this.cof['Sedan']['Hybrid'][2] = [1, 0.106];
      this.cof['Sedan']['Hybrid'][3] = [1, 0.128];
      this.cof['Sedan']['Hybrid'][4] = [1, 1];
      this.cof['Sedan']['Hybrid'][0] = [0, 0];
  
      // Sedan - Electric
      this.cof['Sedan']['Electric'][1.5] = [0.2475, 0.225];
      this.cof['Sedan']['Electric'][2] = [0.2475, 0.225];
      this.cof['Sedan']['Electric'][3] = [0.2475, 0.225];
      this.cof['Sedan']['Electric'][4] = [0.2475, 0.225];
      this.cof['Sedan']['Electric'][0] = [0, 0];
  
      // Repeat similar initialization for SUV, Hatchback, and Commercial Vehicle...
  
      // SUV - Petrol
      this.cof["SUV"]["Petrol"][1.5] = [0.166, 0.153];
      this.cof['SUV']['Petrol'][2] = [0.208, 0.193];
      this.cof['SUV']['Petrol'][3] = [0.279, 0.258];
      this.cof['SUV']['Petrol'][4] = [0.289, 0.267];
      this.cof['SUV']['Petrol'][0] = [0, 0];
  
      // SUV - Diesel
      this.cof['SUV']['Diesel'][1.5] = [0.157, 0.145];
      this.cof['SUV']['Diesel'][2] = [0.201, 0.186];
      this.cof['SUV']['Diesel'][3] = [0.220, 0.203];
      this.cof['SUV']['Diesel'][4] = [0.290, 0.269];
      this.cof['SUV']['Diesel'][0] = [0, 0];
  
      // SUV - CNG
      this.cof['SUV']['CNG'][1.5] = [1, 1];
      this.cof['SUV']['CNG'][2] = [1, 1];
      this.cof['SUV']['CNG'][3] = [1, 1];
      this.cof['SUV']['CNG'][4] = [1, 1];
      this.cof['SUV']['CNG'][0] = [0, 0];
  
      // SUV - Hybrid
      this.cof['SUV']['Hybrid'][1.5] = [1, 0.116];
      this.cof['SUV']['Hybrid'][2] = [1, 0.140];
      this.cof['SUV']['Hybrid'][3] = [1, 0.144];
      this.cof['SUV']['Hybrid'][4] = [1, 1];
      this.cof['SUV']['Hybrid'][0] = [0, 0];
  
      // SUV - Electric
      this.cof['SUV']['Electric'][1.5] = [0.3025, 0.275];
      this.cof['SUV']['Electric'][2] = [0.3025, 0.275];
      this.cof['SUV']['Electric'][3] = [0.3025, 0.275];
      this.cof['SUV']['Electric'][4] = [0.3025, 0.275];
      this.cof['SUV']['Electric'][0] = [0, 0];
      
      // Hatchback - Petrol
      this.cof["Hatchback"]["Petrol"][1.5] = [0.122, 0.113];
      this.cof['Hatchback']['Petrol'][2] = [0.132, 0.122];
      this.cof['Hatchback']['Petrol'][3] = [0.168, 0.155];
      this.cof['Hatchback']['Petrol'][4] = [0.198, 0.182];
      this.cof['Hatchback']['Petrol'][0] = [0, 0];

      // Hatchback - Diesel
      this.cof['Hatchback']['Diesel'][1.5] = [0.104, 0.096];
      this.cof['Hatchback']['Diesel'][2] = [0.112, 0.103];
      this.cof['Hatchback']['Diesel'][3] = [0.152, 0.140];
      this.cof['Hatchback']['Diesel'][4] = [0.178, 0.164];
      this.cof['Hatchback']['Diesel'][0] = [0, 0];

      // Hatchback - CNG
      this.cof['Hatchback']['CNG'][1.5] = [1, 1];
      this.cof['Hatchback']['CNG'][2] = [1, 1];
      this.cof['Hatchback']['CNG'][3] = [1, 1];
      this.cof['Hatchback']['CNG'][4] = [1, 1];
      this.cof['Hatchback']['CNG'][0] = [0, 0];

      // Hatchback - Hybrid
      this.cof['Hatchback']['Hybrid'][1.5] = [1, 0.078];
      this.cof['Hatchback']['Hybrid'][2] = [1, 0.093];
      this.cof['Hatchback']['Hybrid'][3] = [1, 0.114];
      this.cof['Hatchback']['Hybrid'][4] = [1, 1];
      this.cof['Hatchback']['Hybrid'][0] = [0, 0];

      // Hatchback - Electric
      this.cof['Hatchback']['Electric'][1.5] = [0.205, 0.186];
      this.cof['Hatchback']['Electric'][2] = [0.205, 0.186];
      this.cof['Hatchback']['Electric'][3] = [0.205, 0.186];
      this.cof['Hatchback']['Electric'][4] = [0.205, 0.186];
      this.cof['Hatchback']['Electric'][0] = [0, 0];

      // Commercial Vehicle - Petrol
      this.cof["Commercial Vehicle"]["Petrol"][1.5] = [0.255, 0.234];
      this.cof['Commercial Vehicle']['Petrol'][2] = [0.295, 0.271];
      this.cof['Commercial Vehicle']['Petrol'][3] = [0.368, 0.339];
      this.cof['Commercial Vehicle']['Petrol'][4] = [0.402, 0.370];
      this.cof['Commercial Vehicle']['Petrol'][0] = [0, 0];

      // Commercial Vehicle - Diesel
      this.cof['Commercial Vehicle']['Diesel'][1.5] = [0.225, 0.207];
      this.cof['Commercial Vehicle']['Diesel'][2] = [0.262, 0.241];
      this.cof['Commercial Vehicle']['Diesel'][3] = [0.325, 0.300];
      this.cof['Commercial Vehicle']['Diesel'][4] = [0.357, 0.329];
      this.cof['Commercial Vehicle']['Diesel'][0] = [0, 0];

      // Commercial Vehicle - CNG
      this.cof['Commercial Vehicle']['CNG'][1.5] = [1, 1];
      this.cof['Commercial Vehicle']['CNG'][2] = [1, 1];
      this.cof['Commercial Vehicle']['CNG'][3] = [1, 1];
      this.cof['Commercial Vehicle']['CNG'][4] = [1, 1];
      this.cof['Commercial Vehicle']['CNG'][0] = [0, 0];

      // Commercial Vehicle - Hybrid
      this.cof['Commercial Vehicle']['Hybrid'][1.5] = [1, 0.145];
      this.cof['Commercial Vehicle']['Hybrid'][2] = [1, 0.173];
      this.cof['Commercial Vehicle']['Hybrid'][3] = [1, 0.190];
      this.cof['Commercial Vehicle']['Hybrid'][4] = [1, 1];
      this.cof['Commercial Vehicle']['Hybrid'][0] = [0, 0];

      // Commercial Vehicle - Electric
      this.cof['Commercial Vehicle']['Electric'][1.5] = [0.350, 0.317];
      this.cof['Commercial Vehicle']['Electric'][2] = [0.350, 0.317];
      this.cof['Commercial Vehicle']['Electric'][3] = [0.350, 0.317];
      this.cof['Commercial Vehicle']['Electric'][4] = [0.350, 0.317];
      this.cof['Commercial Vehicle']['Electric'][0] = [0, 0];

  }
  

  calEmission(){
    this.emissions.houseHoldEmission = 0;
    this.emissions.carEmission = 0;
    this.emissions.bikeEmission = 0;
    this.emissions.travellingEmission = 0;
    this.emissions.wasteEmission = 0;
    this.emissions.offsetsEmission = 0;

    if(this.hHData && this.hHData.electricity && this.hHData.lpg  && this.hHData.naturalGas
      && this.hHData.coal && this.hHData.heatOil  && this.hHData.propane  && this.hHData.woodenPallets
    ){
          this.emissions.houseHoldEmission += this.hHData.electricity*0.716 + this.hHData.lpg*2.914164 +
                                 this.hHData.naturalGas*2.812 + this.hHData.heatOil*3.19271 +
                                 this.hHData.coal*2.3 +  this.hHData.propane*2.94 + this.hHData.woodenPallets*1.7;
      }
    if(this.travellingData && this.travellingData.travellingByBus && this.travellingData.travellingByFlight  && this.travellingData.travellingByRailway){
      this.emissions.travellingEmission += this.travellingData.travellingByBus*0.015161 + this.travellingData.travellingByRailway*0.009504 +
                                  this.travellingData.travellingByFlight*0.121
       }
    if(this.offsetData && this.offsetData.areaUnderSoil && this.offsetData.numOfTrees && this.offsetData.getAreaUnderWater){
       this.emissions.offsetsEmission += this.offsetData.numOfTrees*20.3 + this.offsetData.areaUnderSoil*0.1 +
                                        this.offsetData.getAreaUnderWater*0.3;
       }
    if(this.wasteData && this.wasteData.foodAndDrink && this.wasteData.houseHoldResidue && this.wasteData.gardenResidue){
           this.emissions.wasteEmission += this.wasteData.houseHoldResidue*0.56 + this.wasteData.foodAndDrink*0.6
                                 + this.wasteData.gardenResidue*0.28;
      }

    if(this.carData && this.carData.carType && this.carData.engineSize && this.carData.fuelType && this.carData.usagePerMonth){
      if(this.carData.carAge && this.carData.carAge>5){
        this.emissions.carEmission += this.cof[this.carData.carType][this.carData.fuelType][this.carData.engineSize][0];
      } else{
        this.emissions.carEmission += this.cof[this.carData.carType][this.carData.fuelType][this.carData.engineSize][1];
      }
      this.emissions.carEmission *= this.carData.usagePerMonth;
    }

    if(this.bikeData && this.bikeData.engineSize && this.bikeData.usagePerMonth){
      if(this.bikeData.bikeAge && this.bikeData.bikeAge>5){
        this.emissions.bikeEmission += this.bcof[this.bikeData.engineSize][0];
      } else{ 
        this.emissions.bikeEmission += this.bcof[this.bikeData.engineSize][1];
      }
      this.emissions.bikeEmission *= this.bikeData.usagePerMonth;
    }

    if(this.userData && this.userData.start_year && this.userData.end_year && this.userData.family_members){
        this.emissions.houseHoldEmission = this.emissions.houseHoldEmission*(this.userData.end_year - this.userData.start_year)*12*this.userData.family_members;
        this.emissions.travellingEmission = this.emissions.travellingEmission*(this.userData.end_year - this.userData.start_year)*12*this.userData.family_members;
        this.emissions.offsetsEmission = this.emissions.offsetsEmission*(this.userData.end_year - this.userData.start_year);
        this.emissions.wasteEmission = this.emissions.wasteEmission*(this.userData.end_year - this.userData.start_year)*12;
        this.emissions.carEmission = this.emissions.carEmission*(this.userData.end_year - this.userData.start_year)*12;
        this.emissions.bikeEmission = this.emissions.bikeEmission*(this.userData.end_year - this.userData.start_year)*12;
      }

      this.emissions.offsetsEmission *= -1;

      this.addService.addEmissionDetails(this.emissions).subscribe(
        resp =>{
          console.log('Saved Data:', resp);
        }
      );
    }

  goHome(){
    this.router.navigate(['/']);
  }
}

