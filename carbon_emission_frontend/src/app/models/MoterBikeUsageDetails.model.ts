export class MotorBikeUsageDetails{
    constructor(
      public user_id?: number,
        public milage?: number,
        public engineType?: string,
        public engineSize?: number,
        public bikeAge?: number,
        public usagePerMonth?: number
      ) {}
}
