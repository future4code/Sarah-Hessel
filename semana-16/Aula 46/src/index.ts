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


app.get('/', testEndpoint)

async function testEndpoint(req:Request, res:Response): Promise<void>{
  try {
    const result = await connection.raw(`
      SELECT * FROM Actor
    `)

    res.status(200).send(result)
  } catch (error) {
    res.status(400).send(error.message)
  }
}