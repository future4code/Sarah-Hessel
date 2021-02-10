import { User, toUserModel} from "../entities/User"
import { BaseDatabase } from "./BaseDatabase"


export class UserData extends BaseDatabase{

   table = "labook_users"

    selectUserByEmail = async (email: string) => {
       try{ 
            const result = await this.connection(this.table)
            .select("*")
            .where({ email })

            return toUserModel(result[0]);;
        }
       catch(e){
            throw new Error (e.sqlMessage || e.message)
       }
    }

    insertUser = async (user: User) => {
        try{
            await this.connection('labook_users')
            .insert({
               id: user.id,
               name: user.name,
               email: user.email,
               password: user.password
            })
        }
        catch(e){
            throw new Error (e.sqlMessage || e.message)
        }
    }
    
}