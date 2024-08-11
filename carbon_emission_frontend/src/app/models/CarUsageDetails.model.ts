

export class CarUsageDetails{
    constructor(
        public user_id?: number,
        public milage?: number,
        public carType?: string,
        public fuelType?: string,
        public engineSize?: number,
        public carAge?: number,
        public usagePerMonth?: number
      ) {}
}
