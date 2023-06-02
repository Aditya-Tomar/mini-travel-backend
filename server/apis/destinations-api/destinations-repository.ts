import * as destinationsData from "../../data/destinations.json";

export class DestinationsRepository {

    static instance: DestinationsRepository;

    constructor() {
        DestinationsRepository.instance = new DestinationsRepository();
    }

    static async getListOfAllDestinations(req: any, res: any): Promise<string> {
        
        return new Promise( (resolve, reject) => {
            const destination: string = JSON.stringify(destinationsData.destinations);
            // res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
            resolve(res.status(200).send(destination));
        });
    }
}