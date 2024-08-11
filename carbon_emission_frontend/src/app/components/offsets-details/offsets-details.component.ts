import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddDetailsService } from '../../services/add-details.service';
import { OffsetsDetails } from '../../models/OffsetsDetails.model';

@Component({
  selector: 'app-offsets-details',
  templateUrl: './offsets-details.component.html',
  styleUrl: './offsets-details.component.css'
})
export class OffsetsDetailsComponent implements OnInit {
  public offsetsDetails: OffsetsDetails;

  constructor(private router: Router, private addService: AddDetailsService) {
    this.offsetsDetails = new OffsetsDetails(undefined, undefined, undefined, undefined, undefined)
  }

  ngOnInit(): void {
    const temp = this.addService.preOffsetsDetails();
    if (temp) this.offsetsDetails = temp;
  }

  onSubmit(): void {
    if (this.offsetsDetails) this.addService.addOffsetsDetails(this.offsetsDetails)
    if (this.offsetsDetails && this.offsetsDetails.numOfTrees && this.offsetsDetails.areaUnderSoil && this.offsetsDetails.getAreaUnderWater && this.offsetsDetails.getAreaUnderGrass) {
      if (this.offsetsDetails.numOfTrees < 0) {
        alert("Enter value > 0")
      } else if (this.offsetsDetails.areaUnderSoil < 0) {
        alert("Enter value > 0")
      } else if (this.offsetsDetails.getAreaUnderWater < 0) {
        alert("Enter value > 0")
      } else if (this.offsetsDetails.getAreaUnderGrass < 0) {
        alert("Enter value > 0")
      } else {
        if (this.offsetsDetails) this.addService.addOffsetsDetails;
        console.log(this.offsetsDetails);
        this.router.navigate(['/results']);
      }
    } else {
      alert("Please fill all required filled")
    }
  }
  goBack() {
    this.router.navigate(['/waste-details'])
  }


}
