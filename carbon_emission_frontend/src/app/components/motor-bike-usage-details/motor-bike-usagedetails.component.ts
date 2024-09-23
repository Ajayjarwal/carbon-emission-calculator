import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddDetailsService } from '../../services/add-details.service';
import { MotorBikeUsageDetails } from '../../models/MoterBikeUsageDetails.model';

@Component({
  selector: 'app-motor-bike-usagedetails',
  templateUrl: './motor-bike-usagedetails.component.html',
  styleUrl: './motor-bike-usagedetails.component.css'
})
export class MotorBikeUsagedetailsComponent implements OnInit {
  public bikeDetails: MotorBikeUsageDetails;
  public engS: String = '';

  constructor(private fb: FormBuilder, private router: Router,
              private addService: AddDetailsService
           ) {
              this.bikeDetails = new MotorBikeUsageDetails(undefined,undefined,'',undefined,undefined,undefined);
             }

  ngOnInit(): void {
    const temp = this.addService.preBikeDetails();
    if(temp){
      this.bikeDetails=temp;
      this.engS = String(temp.engineSize);
      }
  }

  onSubmit(): void {
      this.bikeDetails.engineSize = Number(this.engS);
      if(this.bikeDetails && this.bikeDetails.milage && this.bikeDetails.engineType && this.bikeDetails.engineSize && this.bikeDetails.bikeAge != undefined && this.bikeDetails.usagePerMonth != undefined){
        if(this.bikeDetails.milage < 0){
          alert("Enter value > 0")
        } else if(this.bikeDetails.bikeAge < 0){
          alert("Enter value > 0")
        } else if(this.bikeDetails.usagePerMonth < 0){
          alert("Enter value > 0")
        }else{
          if (this.bikeDetails) this.addService.addBikeDetails(this.bikeDetails);
          console.log('Form Submitted!', this.bikeDetails);
          this.router.navigate(['/travelling-details']);
        }
      }else{
        alert("Please fill all required filled");
      }
  }
  goBack(){
    this.router.navigate(['/car-usages'])
  }
}
