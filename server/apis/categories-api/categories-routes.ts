import express from "express";
import { CategoriesRepository } from "./categories-repository";

export class CategoriesRoutes {

    constructor(){}

    initRoutes(): void {
        const router = express.Router();

        router.get("/list", CategoriesRepository.getCategoryList );

        return router;
    }
}