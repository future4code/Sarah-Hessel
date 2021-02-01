import { connection } from "..";

const TABLE = "cookenu_recipes"

export const selectAllRecipes = async (): Promise<any> => {
    try{
        const result = await connection(TABLE)
        .select("*")
        
        return result
    }
    catch(e){
        throw new Error(e.sqlMessage || e.message)
    }
}  