import fs from "fs";

export class QueriesRepository {

    static instance: QueriesRepository;

    constructor() {
        QueriesRepository.instance = new QueriesRepository();
    }

    static async getListOfAllQueries(req: any, res: any): Promise<any> {
        return new Promise( (resolve, reject) => {
            fs.readFile('./server/data/queries.json', (err,data) => {
                const queries = JSON.parse(data.toString())[0];
                resolve(res.status(200).send(queries));
            })
        });
    }

    static async addQuery(req, res): Promise<void> {
        return new Promise( (resolve, reject) => {
            let queries;

            fs.readFile('./server/data/queries.json', (err,data) => {
                queries = JSON.parse(data.toString())[0];
                queries.queries.push(req.body);
                fs.writeFile('./server/data/queries.json', JSON.stringify([queries]), () => {
                    resolve(res.status(201).send());
                })
            });
        })
    }
}