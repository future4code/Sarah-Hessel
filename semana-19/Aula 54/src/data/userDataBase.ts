import { User, USER_ROLES } from "../business/entites/user";
import { connection } from "./connection";

const TABLE_NAME = "User_Arq"

export const insertUser = async(user: User): Promise<void> => {
    try{
        console.count("Passei por aqui 11")
        await connection
        .insert({
            id: user.id,
            name: user.name,
            email: user.email, 
            password: user.password,
            role: user.role
        })
        .into()
        console.count("Passei por aqui 12")
    }
    catch(e){
        console.count("Passei por aqui 13")
        throw new Error(e.sqlMessage || e.message)
    }
};

