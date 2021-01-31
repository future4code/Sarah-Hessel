import {connection} from "../index"

export const createUser = async (id: string, email: string, password: string): Promise<void> => {
   try{
    await connection
    .insert({
        id,
        email,
        password
        })
    .into("User")
    console.log("Usuário criado com sucesso!")
   }
   catch(e){
    console.log(e.sqlMessage || e.message)
   }
}
