import {connection} from "../index"

export const createTable = async (): Promise<void> => {
   try{
    await connection.raw(`
    CREATE TABLE User(
    id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL)
    `);
    console.log("Tabelas criadas com sucesso!")
   }
   catch(e){
    console.log(e.sqlMessage || e.message)
   }
}

createTable()