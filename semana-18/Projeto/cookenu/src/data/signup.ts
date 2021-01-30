import { connection } from ".."
import { user } from "../types/user"


export const signup = async(user: user): Promise<void> =>{
    try{
        await connection
        .insert({
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password
        })
        .into("cookenu_signup")
        console.log("Successfully created!")
    }
    catch(e){
        console.log(e.sqlMessage || e.message)
    }
}