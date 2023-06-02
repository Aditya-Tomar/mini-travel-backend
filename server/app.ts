import { App } from "./config/app";
import cluster from "cluster";
import * as os from "os";

// async function run(app) {
//     await app.initializeApp();
// }

export async function handler(){
    const app = new App();
    return await app.initializeApp();
}
// // if ( cluster.isPrimary ) {
// //     console.log('Here');
// //     const cpus = os.cpus.length;

// //     for(let cpu=0; cpu< cpus/2; cpu++){
// //         cluster.fork();
// //     }

// //     console.log('Herssse');
// //     cluster.on('close', () => {
// //         cluster.fork();
// //     })
// // }
// // else {
    // run(app);
// // }


// import express from "express";
    // "start": "nodemon --exec npx ts-node ./server/index.ts",

// const app = express();

// app.get("/api/destinations/list", (req, res) => {
//     res.send("Hello Worlds")
// })

// app.listen(3000, () => {
//     console.log("Server listening");
// })