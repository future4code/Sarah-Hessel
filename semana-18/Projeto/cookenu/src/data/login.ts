import { connection } from ".."
import { user } from "../types/user"

const TABLE = "cookenu_users"

export const login = async (email: string): Promise<any> => {
    try{
        const result = await connection
        .select("*")
        .from(TABLE)
        .where({email})
        return result[0];
    }
    catch(e){
        console.log(e.sqlMessage || e.message)
    }
}