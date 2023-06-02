import express from "express";
import { DestinationsRepository } from "./destinations-repository";

export class DestinationsRoutes {

    constructor(){}

    initRoutes() {
        const router: any = express.Router();

        router.get('/list', DestinationsRepository.getListOfAllDestinations );

        return router;
    }
}