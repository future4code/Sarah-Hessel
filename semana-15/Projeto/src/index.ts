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



// endpoint de buscar contas
 app.get('/account/all', (req: Request, res: Response) => {
   const result = accounts;
   res.status(200).send(result)
})

// endpoint de criar conta
app.post('/account/register', (req: Request, res: Response) => {
   try{
      const {name, CPF, birthdayString} = req.body    // desestruturação - o corpo body vai receber as variaveis nome, cpf e data de nascimento.
      const [day, month, year] = birthdayString.split('/')

      const birthday: Date = new Date(`${year}-${month}-${day}`)
      const reqBody: User = {
         name,
         CPF,
         birthday,
         balance: 0,
         statement:[]
      }
         accounts.push(reqBody)
         res.status(201).send("Conta criada com sucesso")
   }catch(error){
      res.status(400).send(error.message)
   }
})

// endpoint de buscar saldo pelo nome e cpf
app.get('/account/:balance', (req: Request, res: Response) => {
      
   try{
   const searchCPF = accounts.filter(a => a.CPF === req.query.CPF )
   const searchName = accounts.filter(a => a.name ===  req.query.NOME)
   const search = searchCPF && searchName 
      res.status(200).send(search)
     
   }catch(error){
      res.status(400).send(error.message)
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