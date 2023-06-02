import { CategoriesRoutes } from "../../apis/categories-api/categories-routes";
import { DestinationsRoutes } from "../../apis/destinations-api/destinations-routes";
import { QueriesRoutes } from "../../apis/queries-api/queries-routes";


export class Routes {

    app: any;

    constructor(app: any){
        this.app = app;
        this.setRoutes();
    }

    setRoutes(): void {
        this.app.use("/api/destinations", new DestinationsRoutes().initRoutes() );
        this.app.use("/api/categories", new CategoriesRoutes().initRoutes() );
        this.app.use("/api/queries", new QueriesRoutes().initRoutes() );
    }
}