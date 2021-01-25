import knex from "knex";
import dotenv from "dotenv";
import express from "express";
import { AddressInfo } from "net";
import {generate} from  "./service/generateId/generateId"


dotenv.config();

export const connection = knex({
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

 /* Questão 2

a) Temos uma chamada de função do Knex que está se conectando com o nosso banco de dados, através das informações contidas no .env
Também temos uma função query builder, que está inserindo informações no banco de dados, em uma tabela User.
b) createTable() que está na pasta controller.
c) createUser() que está na pasta data.
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

