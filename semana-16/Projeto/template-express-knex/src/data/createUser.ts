import { connection } from ".."

export const createUser = async(name: string, nickname: string, email: string): Promise<any> =>{
    try{
        await connection
    .insert({
        id: Date.now(),   // forma de gerar um id aleátorio
        name: name,
        nickname: nickname,
        email: email
    })
    .into("TodoListUser")
    }
    catch(error){
        console.log(error.sqlMessage || error.message)
    }
};