import {connection} from "../src/index"

export default  async function selectAllUsers(type:string):Promise<any> {
    try{
    const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio
      WHERE type LIKE "%${type}%"
    `)
    return result[0]
    }
    catch(error){
        console.log(error.sqlMessage || error.message)
    }
}