import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddDetailsService } from '../../services/add-details.service';
import { TravellingDetails } from '../../models/TravellingDetails.model';

@Component({
  selector: 'app-travelling-details',
  templateUrl: './travelling-details.component.html',
  styleUrl: './travelling-details.component.css'
})
export class TravellingDetailsComponent implements OnInit {
  public travellingDetails: TravellingDetails;

  constructor(private router: Router,
              private addService: AddDetailsService
              ){
                this.travellingDetails = new TravellingDetails(undefined, undefined, undefined, undefined, undefined);
               }

  ngOnInit(): void{
    const temp = this.addService.preTravellingDetails();
    if(temp)this.travellingDetails = temp;
  }

  onSubmit(): void {
    if(this.travellingDetails)this.addService.addTravellingDetails(this.travellingDetails)
    if(this.travellingDetails && this.travellingDetails.travellingByBus && this.travellingDetails.travellingByTaxi && this.travellingDetails.travellingByRailway && this.travellingDetails.travellingByFlight){
      if(this.travellingDetails.travellingByBus < 0){
        alert("Enter value >= 0")
      } else if(this.travellingDetails.travellingByTaxi < 0){
        alert("Enter value >= 0")
      } else if(this.travellingDetails.travellingByRailway < 0){
        alert("Enter value >= 0")
      } else if(this.travellingDetails.travellingByFlight < 0){
        alert("Enter value >= 0")
      } else{
        if (this.travellingDetails) this.addService.addTravellingDetails(this.travellingDetails);
        console.log(this.travellingDetails);
        this.router.navigate(['/waste-details']);
      }
    }else{
      alert("Please fill all required filled");
    }
  }
  goBack(){
    this.router.navigate(['/motor-bike-usage'])
  }
}

