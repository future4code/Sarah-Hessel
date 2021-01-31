import { connection } from ".."

export const selectData = async (id: string ): Promise<any> => {
    try{
        const result = await connection .raw(`
        SELECT * FROM User
        WHERE id = "${id}";
        `)
    return result[0][0]
   
    
    }
    catch(e){
        console.log(e.message || e.message)
    }
}