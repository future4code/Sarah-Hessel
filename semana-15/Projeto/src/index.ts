// dentro do index.ts, fazer importações e ativar o Express e Cors.

import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import {accounts} from './users'
import {User} from './types'

const app: Express = express();

app.use(express.json());
app.use(cors());

// a função express() inicia a aplicação web com express
// os .use() ativam os módulos de Bodyparser e Cors




 app.get('/account/all', (req: Request, res: Response) => {
   const result = accounts;
   res.status(200).send(result)
})

app.post('account/register', (req: Request, res: Response) => {
   try{
      const {name, CPF, birthday} = req.body    // o corpo body vai receber as variaveis nome, cpf e data de nascimento.
      accounts.push({
         name,
         CPF,
         birthday,
         balance: 0,
         statement: []
      })

   }catch(error){

   }
})

import { AddressInfo } from "net";

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});