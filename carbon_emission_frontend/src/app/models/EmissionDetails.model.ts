export class EmissionDetails{
  constructor(
          public user_id?: number,
          public houseHoldEmission?: number,
          public carEmission?: number,
          public bikeEmission?: number,
          public travellingEmission?: number,
          public wasteEmission?: number,
          public offsetsEmission?: number
        ) {}
  }
