import express, {Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import knex from "knex";
import { AddressInfo } from "net";
import createStudent from "./endpoints/createStudent";
import createTeacher from "./endpoints/createTeacher"
import createMission from "./endpoints/createMission";

const app: Express = express();
app.use(express.json());
app.use(cors());

dotenv.config()

export const connection = knex({
    client: "mysql",
    connection: {
       host: process.env.DB_HOST,
       port: 3306,
       user: process.env.DB_USER,
       password: process.env.DB_PASSWORD,
       database: process.env.DB_NAME
    }
 })

 app.post('/user/create/student', createStudent)
 
 app.post('/user/create/teacher', createTeacher)
 
 app.post('/user/create/mission', createMission)


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});
