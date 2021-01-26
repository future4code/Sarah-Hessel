import { connection } from ".."

export const selectData = async (email: string ): Promise<any> => {
    try{
        const result = await connection .raw(`
        SELECT * FROM User
        WHERE email = "${email}";
        `)
    return result[0][0]
   
    
    }
    catch(e){
        console.log(e.message || e.message)
    }
}

