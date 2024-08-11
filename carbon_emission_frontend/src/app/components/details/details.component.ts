import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDetails } from '../../models/UserDetails.model';
import { AddDetailsService } from '../../services/add-details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})

export class DetailsComponent implements OnInit {
  public details: UserDetails;

  constructor(
    private addService: AddDetailsService,
    private router: Router
    ) {
      this.details = new UserDetails('',undefined,undefined,undefined);
    }

  ngOnInit(): void {
    const temp = this.addService.preUserDetails();
    if(temp)this.details = temp;
    console.log(temp);
  }

  onSubmit(): void {

      if(this.details && this.details.country && this.details.family_members && this.details.start_year && this.details.end_year){
        if(this.details.family_members > 10){
          alert("Maximum Family Member 10!")
        } else if(this.details.start_year < 2020){
          alert("Minimum Year 2020!")
        } else if(this.details.end_year > 2023){
          alert("Maximum year 2023!")
        } else if(this.details.start_year>=this.details.end_year){
          alert("Starting Year Crossed End Year !!")
        } else{
          if(this.details)this.addService.addUserDetails(this.details);
          // console.log('Form Submitted!', this.details);
          // Add logic to save the details object, e.g., send it to a backend server
          // For now, let's navigate back to home after submission
          this.router.navigate(['/house-hold-details']);
        }
      } else{
        alert("Please fill all required filled");
      }

  }
}
