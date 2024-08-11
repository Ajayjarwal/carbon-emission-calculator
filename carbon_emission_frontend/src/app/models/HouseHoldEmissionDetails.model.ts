
export class HouseHoldEmissionDetails{
    constructor(
        public user_id?: number,
        public electricity?: number,
        public lpg?: number,
        public naturalGas?: number,
        public heatOil?: number,
        public coal?: number,
        public propane?: number,
        public woodenPallets?: number
      ) {}
}
