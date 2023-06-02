import express from "express";
import { QueriesRepository } from "./queries-repository";

export class QueriesRoutes {

    constructor(){}

    initRoutes(): void {
        const router: any = express.Router();

        router.get('/list', QueriesRepository.getListOfAllQueries );
        router.post('/newQuery', QueriesRepository.addQuery );
        
        return router;
    }
}