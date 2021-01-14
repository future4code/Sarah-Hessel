import knex from "knex";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";

/**************************************************************/

dotenv.config();

/**************************************************************/

const connection = knex({   
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

/**************************************************************/

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

/**************************************************************/

/* Questão 1*/

const getActorById = async (id: string): Promise<any> => {
  try{
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)

  return result[0][0]
  }
  catch(error){
    console.log(error.sqlMessage || error.message)
  }
}

// a) Fiz um console.log(result) e é retornado varios arrays de objetos, um deles é com as informações do ator que foi passado como parametro o id na chamada da função.

// b) 
      const getActorByName = async (name: string): Promise<any> => {
        try{
          const result = await connection.raw(`
          SELECT * FROM Actor
            WHERE name = '${name}'
          `)
          return result[0][0]
        }
        catch(error){
          console.log(error.sqlMessage || error.message)
        }
      }
  

// c) 
      const getCountByGender = async (gender: string): Promise<any> => {
        try{
          const result = await connection.raw(`
            SELECT COUNT(*) as count FROM Actor
              WHERE gender = "${gender}"
          `)
          const count = result[0][0].count;
          return count
        }
        catch(error){
          console.log(error.sqlMessage || error.message)
        }
      }


/* Questão 2*/

// a) 
  const updateSalaryById = async(id: string, salary: number): Promise<any> => {
    try{
      const result = await connection("Actor")
        .update({
          salary: salary
        })
        .where("id", id)

    }
    catch(error){
      console.log(error.sqlMessage || error.message)
    }
  }

// b)
  const deleteActorById = async(id: string): Promise<void> => {    // não tem retorno ao deletar
    try{
      const result = await connection("Actor")
      .delete()
      .where({id})

    }
    catch(error){
      console.log(error.sqlMessage || error.message)
    }
  }

// c) 
  const avgByGender = async(gender: string): Promise<any> => {
    try{
      const result = await connection("Actor")
        .avg('salary as average')
        .where({gender})

     return result[0].average
    }
    catch(error){
     console.log(error.sqlMessage || error.message) 
    }
  }

/* Questão 3*/

// a)
  app.get('/actor/:id', async (req: Request, res: Response): Promise<any> => {
    try{
      const id = req.params.id
      const actor = await getActorById(id)

      res.status(200).send(actor)
    }
    catch(error){
      res.status(400).send({
        message: error.message
      })
    }
  })

// b)
  app.get('/actor', async (req: Request, res: Response): Promise<any> => {
    try{
      const count = await getCountByGender(req.query.gender as string)
      res.status(200).send({ quantity: count })
    }
    catch(error){
      res.status(400).send({
        message: error.message
      })
    }
  });

/* Questão 4*/

  const createActor = async(id: string, name: string, salary: number, dateOfBirth: Date, gender: string ): Promise<void> =>{
    await connection
    .insert({
      id: id, 
      name: name, 
      salary: salary,
      birth_date: dateOfBirth,
      gender: gender
    })
    .into("Actor")
  };

  app.put('/actor/create', async (req: Request, res: Response): Promise<any> => {
    try{
      await createActor(
        req.body.id, 
        req.body.name,   
        req.body.salary,  
        new Date(req.body.dateOfBirth),
        req.body.gender
      );
      res.status(200).send()
    }
    catch(error){
      res.status(400).send({
        message: error.message
      })
    }
  });

  // a)
    app.post('/actor', async (req: Request, res: Response):Promise<any> => {
      try{
        await updateSalaryById(req.body.id, req.body.salary)
        res.status(200).send()
      }
      catch(error){
        res.status(400).send({
          message: error.message
        })
      }
    });

// b)
    app.post('/actor/:id', async (req: Request, res: Response):Promise<any> => {
      try{
        await deleteActorById(req.params.id)
        res.status(200).send()
      }
      catch(error){
        res.status(400).send({
          message: error.message
        })
      }
    })
