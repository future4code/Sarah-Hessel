import { connection } from ".."

const TABLE = "cookenu_users"

export const SelectData = async (id: string): Promise<any> => {
    try{
        const result = await connection
        .select("*")
        .from(TABLE)
        .where({id})
        return result[0];
    }
    catch(e){
        console.log(e.sqlMessage || e.message)
    }
}