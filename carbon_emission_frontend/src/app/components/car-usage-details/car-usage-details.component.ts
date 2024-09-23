import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddDetailsService } from '../../services/add-details.service';
import { CarUsageDetails } from '../../models/CarUsageDetails.model';

@Component({
  selector: 'app-car-usage-details',
  templateUrl: './car-usage-details.component.html',
  styleUrl: './car-usage-details.component.css'
})
export class CarUsageDetailsComponent implements OnInit{
  public carDetails: CarUsageDetails;
  public engS: String = "";

  constructor(
      private fb: FormBuilder,
      private router: Router,
      private addService: AddDetailsService
      ) {
        this.carDetails = new CarUsageDetails(undefined,undefined,'','',undefined,undefined,undefined);
      }

  ngOnInit(): void {
      const temp = this.addService.preCarDetails();
      if(temp){
        this.carDetails = temp;
        this.engS = String(temp.engineSize);
        }

  }

  onSubmit(): void {
      this.carDetails.engineSize = Number(this.engS);
      if(this.carDetails && this.carDetails.milage && this.carDetails.carType && this.carDetails.fuelType && 
        this.carDetails.engineSize && this.carDetails.carAge != undefined && this.carDetails.usagePerMonth != undefined){
        if (this.carDetails.milage < 0){
          alert("Enter value > 0")
        } else if(this.carDetails.carAge < 0){
          alert("Enter value > 0")
        } else if(this.carDetails.usagePerMonth < 0){
          alert("Enter value > 0")
        }else{
          if (this.carDetails) this.addService.addCarDetails(this.carDetails);
          console.log('Form Submitted!', this.carDetails);
          this.router.navigate(['/motor-bike-usage'])
        }
      }else{
        alert("Please fill all required filled");
      }
   }
  goBack(){
     this.router.navigate(['/house-hold-details'])
   }
}
