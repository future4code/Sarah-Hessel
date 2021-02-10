import {Request, Response} from 'express'
import { User } from '../business/entites/user'
import { businessSignup } from '../business/userBusiness'

export const signup = async(req: Request, res: Response) =>{
    let statusCode: number = 400
    console.count("Passei por aqui 2")
    try{
        const newSignup: User = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role
        }
        const data = await businessSignup(newSignup)
        console.count("Passei por aqui 3")
        statusCode = await data.statusCode
        console.count("Passei por aqui 4")
        res.status(200).end("user created successfully!", data.token)
    }
    catch(e){
        console.count("Passei por aqui 5")
        res.status(statusCode).send({
            message: e.message
        })
    }
}