import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddDetailsService } from '../../services/add-details.service';
import { WasteDetails } from '../../models/WasteDetails.model';

@Component({
  selector: 'app-waste-details',
  templateUrl: './waste-details.component.html',
  styleUrl: './waste-details.component.css'
})
export class WasteDetailsComponent implements OnInit {
  public wasteDetails: WasteDetails;

  constructor(private router: Router, private addService: AddDetailsService) {
    this.wasteDetails = new WasteDetails(undefined, undefined, undefined, undefined);
  }

  ngOnInit(): void {
    const temp = this.addService.preWasteDetails();
    if (temp) this.wasteDetails = temp;
  }

  onSubmit(): void {
    if (this.wasteDetails) this.addService.addWasteDetails(this.wasteDetails)
    // if(this.wasteDetails.gardenResidue < 0){
    //   alert("Enter value >=0")
    // }
    if (this.wasteDetails && this.wasteDetails.houseHoldResidue && this.wasteDetails.foodAndDrink) {
      if (this.wasteDetails.houseHoldResidue < 0) {
        alert("Enter value >= 0")
      } else if (this.wasteDetails.foodAndDrink < 0) {
        alert("Enter value >= 0")
      } else {
        if (this.wasteDetails) this.addService.addWasteDetails(this.wasteDetails);
        console.log(this.wasteDetails);
        this.router.navigate(['/offsets-details']);
      }
    } else {
      alert("Please fill all required filled");
    }
  }

  goBack() {
    this.router.navigate(['/travelling-details'])
  }
}
