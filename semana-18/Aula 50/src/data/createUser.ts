import {connection} from "../index"

export const createUser = async (user: User): Promise<void> => {
   try{
    await connection
    .insert({
        id: user.id,
        email: user.email,
        password: user.password
        })
    .into("user")
    console.log("Usuário criado com sucesso!")
   }
   catch(e){
    console.log(e.sqlMessage || e.message)
   }
}
