import * as CategoriesData from "../../data/categories.json";

export class CategoriesRepository {

    static instance: CategoriesRepository;

    constructor(){
        CategoriesRepository.instance = new CategoriesRepository();
    }

    static async getCategoryList(req, res): Promise<string> {
        return new Promise( (resolve, reject ) => {
            const categories: string = JSON.stringify(CategoriesData.categories);
            // res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
            resolve(res.status(200).send(categories));
        });
    }
}