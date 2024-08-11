import { Injectable } from '@angular/core';
import { UserDetails } from '../models/UserDetails.model';
import { HouseHoldEmissionDetails } from '../models/HouseHoldEmissionDetails.model';
import { CarUsageDetails } from '../models/CarUsageDetails.model';
import { MotorBikeUsageDetails } from '../models/MoterBikeUsageDetails.model';
import { TravellingDetails } from '../models/TravellingDetails.model';
import { WasteDetails } from '../models/WasteDetails.model';
import { OffsetsDetails } from '../models/OffsetsDetails.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { EmissionDetails } from '../models/EmissionDetails.model';

@Injectable({
  providedIn: 'root'
})
export class AddDetailsService {


  private baseUrl = 'http://localhost:8080';
  private id: number = -1;

  private userData?: UserDetails;
  private hHData?: HouseHoldEmissionDetails;
  private carData?: CarUsageDetails;
  private bikeData?: MotorBikeUsageDetails;
  private travellingData?: TravellingDetails;
  private wasteData?: WasteDetails;
  private offsetData?: OffsetsDetails;


  constructor(
      private http: HttpClient
    ) { }

  addUserDetails(newUserDetails: UserDetails): void {
    this.userData = newUserDetails;

  }

  preUserDetails(){
    return this.userData;
  }

  addHhDetails(newHhDetails: HouseHoldEmissionDetails): void {
    this.hHData = newHhDetails;
  }

  preHHDetails(){
    return this.hHData;
  }

  addCarDetails(newCarDetails: CarUsageDetails): void {
    this.carData = newCarDetails;
  }

  preCarDetails(){
    return this.carData;
  }

  addBikeDetails(newBikeDetails: MotorBikeUsageDetails): void {
    this.bikeData = newBikeDetails;
  }

  preBikeDetails(){
    return this.bikeData;
  }

  addTravellingDetails(newTravellingDetails: TravellingDetails): void{
    this.travellingData = newTravellingDetails;
  }

  preTravellingDetails(){
    return this.travellingData;
  }

  addWasteDetails(newWasteDetails: WasteDetails): void{
    this.wasteData = newWasteDetails;
  }

  preWasteDetails(){
    return this.wasteData;
  }

  addOffsetsDetails(newOffsetDetails: OffsetsDetails): void{
    this.offsetData = newOffsetDetails;
//     console.log('Saved Data: ', this.userData);
//     console.log(this.hHData);
//     console.log(this.carData);
//     console.log(this.bikeData);
//     console.log(this.travellingData);
//     console.log(this.wasteData);
//     console.log(this.offsetData);


    if(this.userData){
      this.saveUserDetails(this.userData).subscribe(
                response => {
                  console.log('User saved successfully!', response);
                  console.log(response.user_id)
                  const temp = response.user_id;
                  this.id = response.user_id;
                  if(this.hHData){
                    this.hHData.user_id = response.user_id;
                    this.saveHHDetails(this.hHData).subscribe(
                            resp => {
                                console.log('HouseDetails Saved successfully!', resp);
                              })
                   }
                  if(this.carData){
                    this.carData.user_id = response.user_id;
                    this.saveCarDetails(this.carData).subscribe(
                                tempC => {
                                    console.log('Car Details Saved successfully!', tempC);
                                  })
                   }
                  if(this.bikeData){
                    this.bikeData.user_id = response.user_id;
                    this.saveBikeDetails(this.bikeData).subscribe(
                                tempB => {
                                    console.log('Bike Details Saved successfully!', tempB);
                                  })
                   }
                  if(this.travellingData){
                    this.travellingData.user_id = response.user_id;
                    this.saveTravellingDetails(this.travellingData).subscribe(
                                respT => {
                                    console.log('Travelling Details Saved successfully!', respT);
                                  })
                    }
                  if(this.wasteData){
                    this.wasteData.user_id = response.user_id;
                    this.saveWasteDetails(this.wasteData).subscribe(
                                respW => {
                                    console.log('Waste Details Saved successfully!', respW);
                                  })
                    }
                  if(this.offsetData){
                    this.offsetData.user_id = response.user_id;
                    this.saveOffsetsDetails(this.offsetData).subscribe(
                                respO => {
                                    console.log('Offsets Details Saved successfully!', respO);
                                  })
                   }
                  // Reset the form

                });
    }

  }

  preOffsetsDetails(){
    return this.offsetData;
  }

  saveUserDetails(user: UserDetails): Observable<any> {
      return this.http.post<UserDetails>(this.baseUrl+'/api/userDetails', user);
  }

  saveHHDetails(hData: HouseHoldEmissionDetails): Observable<any> {
      return this.http.post<HouseHoldEmissionDetails>(this.baseUrl+'/api/houseDetails', hData);
  }

  saveCarDetails(user: CarUsageDetails): Observable<any> {
        return this.http.post<CarUsageDetails>(this.baseUrl+'/api/carDetails', user);
    }

  saveBikeDetails(user: MotorBikeUsageDetails): Observable<any> {
        return this.http.post<MotorBikeUsageDetails>(this.baseUrl+'/api/bikeDetails', user);
    }

  saveTravellingDetails(user: TravellingDetails): Observable<any> {
        return this.http.post<TravellingDetails>(this.baseUrl+'/api/travellingDetails', user);
    }

  saveWasteDetails(user: WasteDetails): Observable<any> {
        return this.http.post<WasteDetails>(this.baseUrl+'/api/wasteDetails', user);
    }

  saveOffsetsDetails(user: OffsetsDetails): Observable<any> {
        return this.http.post<OffsetsDetails>(this.baseUrl+'/api/offsetsDetails', user);
    }

  addEmissionDetails(emissions: EmissionDetails): Observable<any>{
      if(this.id > 0)emissions.user_id = this.id;
      return this.http.post<EmissionDetails>(this.baseUrl + '/api/emissionDetails', emissions);
  }


}
