import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddDetailsService } from '../../services/add-details.service';
import { HouseHoldEmissionDetails } from '../../models/HouseHoldEmissionDetails.model';

@Component({
  selector: 'app-household-emission-details',
  templateUrl: './household-emission-details.component.html',
  styleUrl: './household-emission-details.component.css'
})
export class HouseholdEmissionDetailsComponent implements OnInit {
  public houseHDetails: HouseHoldEmissionDetails;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private addService: AddDetailsService
  ) {
    this.houseHDetails = new HouseHoldEmissionDetails(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)
  }

  ngOnInit(): void {
    const temp = this.addService.preHHDetails();
    if (temp) this.houseHDetails = temp;
  }

  onSubmit(): void {
    if (this.houseHDetails) this.addService.addHhDetails(this.houseHDetails);

    if (this.houseHDetails && this.houseHDetails.electricity != undefined && this.houseHDetails.lpg != undefined && this.houseHDetails.naturalGas != undefined
       && this.houseHDetails.heatOil != undefined && this.houseHDetails.coal != undefined && this.houseHDetails.propane != undefined
        && this.houseHDetails.woodenPallets != undefined) {
      if (this.houseHDetails.electricity < 0) {
        alert("Enter value >=0")
      } else if (this.houseHDetails.lpg < 0) {
        alert("Enter value >=0")
      } else if (this.houseHDetails.naturalGas < 0) {
        alert("Enter value >=0")
      } else if (this.houseHDetails.heatOil < 0) {
        alert("Enter value >=0")
      } else if (this.houseHDetails.coal < 0) {
        alert("Enter value >=0")
      } else if (this.houseHDetails.propane < 0) {
        alert("Enter value >=0")
      } else if (this.houseHDetails.woodenPallets < 0) {
        alert("Enter value >=0")
      } else {
        if (this.houseHDetails) this.addService.addHhDetails(this.houseHDetails);
        console.log('Form Submitted!', this.houseHDetails);
        this.router.navigate(['/car-usages']);
      }
    }else{
      alert("Please fill all required filled");
    }

  }
  goBack(){
    this.router.navigate(['/details']);
  }
}
