import {Request, Response} from 'express'
import { signup } from '../data/signup'
import { generateToken } from '../services/authenticator'
import { generateId } from "../services/idGenerator"
import { hash } from '../services/hashManager'


export const userCreator = async(req: Request, res: Response): Promise<void> => {
    let errorCode: number = 400
    try{
        const {name, email, password} = req.body

        if(!name || !email || !password){
            errorCode = 422
            throw new Error("Please make sure all fields are filled 'name', 'email', 'password'")
        }
        if(!email.includes("@")){
            throw new Error("The 'email' must contain @")
        }
        if(password.length > 6){
            throw new Error("The 'password' must contain a maximum of 6 characters")
        }
        const id = generateId()
        const token = generateToken({id})
       
        const cypherPassword:string  = await hash(password)

        await signup({id, name, email, password: cypherPassword })
        
        res.status(200).send({
            access_token: token
        })
    }
    catch(e){
        res.status(errorCode).send({
            message: e.sqlMessage || e.message
        })
    }
}

