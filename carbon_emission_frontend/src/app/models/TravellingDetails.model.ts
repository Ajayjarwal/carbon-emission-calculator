
export class TravellingDetails{
    constructor(
        public user_id?: number,
        public travellingByBus?: number,
        public travellingByTaxi?: number,
        public travellingByRailway?: number,
        public travellingByFlight?: number
    ) {}
}
