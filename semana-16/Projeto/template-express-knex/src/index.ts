import express, { Express, Request, Response } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import {createUser} from './data/createUser'
import { getUserById } from "./data/getUserById";
import { editUserById } from "./data/editUserById";
dotenv.config();

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

const app: Express = express();
app.use(express.json());
app.use(cors())

// endpoint de criar usuário

app.post('/user/create', async(req: Request, res: Response) => {   // poderia ser usado PUT tb.
   let errorCode: number = 400

   const {name, nickname, email} = req.body
   try{
      const user = await createUser(
         name,
         nickname, 
         email
      )    

      res.status(200).send()
   }
   catch(error){
      res.status(errorCode).send({
         message: error.message
      })
   }
})

// endpoint de pegar usuario pelo id

app.get('/user/:id', async(req: Request, res: Response) => {
   let errorCode: number = 400
   try{
      const {id} = req.params
      const user = await getUserById(id)

      if(!user){
         errorCode = 404
         throw new Error("Id não encontrado!")
      }
   res.status(200).send(user)
   }
   catch(error){
      res.status(errorCode).send({
         message: error.message
      })
   }
})

app.post('/user/edit/:id', async (req: Request, res: Response) => {
   let errorCode: number = 400
   try{
      const {id} = req.params
      const {name, nickname} = req.body
      const edit = await editUserById(id, name, nickname)
      res.status(200).send(edit)
   }
   catch(error){
      res.status(errorCode).send({
         message: error.message
      })
   }
})

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});
