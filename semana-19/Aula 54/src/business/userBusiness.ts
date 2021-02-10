import { insertUser } from "../data/userDataBase"
import { generateToken } from "./services/authenticator"
import { hash } from "./services/hashManager"
import { generateId } from "./services/idGenerator"
import { User, USER_ROLES } from "./entites/user"

export const businessSignup = async(user: User): Promise<any> => {
    let statusCode: number = 400
    console.count("Passei por aqui 6")
    try{
        
        if(!user.name || !user.email || !user.password || !user.role){
            statusCode = 404
            throw new Error("Please fill in the parameters 'name', 'email', 'password' and 'role'")
        }
        if(user.role !== USER_ROLES.ADMIN &&
           user.role !== USER_ROLES.NORMAL   
        ){
            statusCode = 406
            throw new Error("Role is accepted only 'NORMAL' and 'ADMIN'")
        }
        if(!user.email || user.email.indexOf("@") === -1 ){
            statusCode = 406
            throw new Error("Invalid email, the email must contain @")
        }
        console.count("Passei por aqui 7")
        const cypherPassword = await hash(user.password)

        const id: string = generateId()
        console.count("Passei por aqui 8")
        await insertUser({
            id, 
            name: user.name, 
            email: user.email, 
            password: cypherPassword, 
            role: user.role
        })
        const token: string = generateToken(
        {
            id, 
            role: user.role    
        })
        console.count("Passei por aqui 9")

    return {token, statusCode}
    }
    catch(e){
        console.count("Passei por aqui 10")
        throw new Error( e.message || "Error creating user. Please check your system administrator.");   
    }
}