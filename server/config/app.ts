import { Routes } from "./routes/routes";
import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";

interface IApp {
    app: any;
    httpServer: any;
}

export class App implements IApp {

    app: any;
    httpServer: any

    constructor(){}

    initializeApp(){
        this.setExpress();
        var whitelist = ['http://localhost:4200']
        var corsOptions = {
            origin: function (origin, callback) {
                console.log(origin);
                if (whitelist.indexOf(origin) !== -1) {
                    callback(null, true)
                } else {
                    callback(new Error('Not allowed by CORS'))
                }
            }
        }
        this.app.use(cors(corsOptions));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.setRoutes();
        this.startListening();

    }

    setExpress() : void {
        this.app = express();

    }
    setRoutes(){
        this.app.use(`/.netlify/functions`, express.Router());
        new Routes(this.app);
        console.log('Routes configured...');
    }

    startListening(): void {
        this.httpServer = http.createServer(this.app);

        this.httpServer.listen(3000, "localhost", () =>{
            console.log("Server started listening");
        })
    }

}
