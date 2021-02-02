import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import {connection} from './data/connection'
import {signup} from './controller/userController'
import { AddressInfo } from "net";

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

app.get("/", async function(req,res){
   res.send(await connection.raw('show tables'))
})

app.put("/signup", signup)


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});