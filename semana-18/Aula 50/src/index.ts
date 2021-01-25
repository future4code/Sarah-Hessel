import knex from "knex";
import dotenv from "dotenv";
import express from "express";
import { AddressInfo } from "net";
import {generate} from  "./generateId/generateId"


dotenv.config();

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || "3306"),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

const app = express();

/* Questão 1

a) Sim, pois com mais opções de caracteres é possivel haver mais variedades de combinações de IDs, diminuindo a possibilidade de gerar conflitos. 
b) Função generateId()
*/

 



app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;

