export class Promotion {
    price: number;
    timeTravel: number;
    city: string;
    destinationAirport: string;
    fromAirport: string;
    imgPath: string;

    constructor(city: string, price: number, timeTravel: number, fromAirport: string, destinationAirport: string, imgPath: string) {
        this.city = city;
        this.price = price;
        this.timeTravel = timeTravel;
        this.destinationAirport = destinationAirport;
        this.fromAirport = fromAirport;
        this.imgPath = imgPath;
    }
}
