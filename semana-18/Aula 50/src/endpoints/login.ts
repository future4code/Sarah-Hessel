import { Request, Response } from "express";
import {selectData} from '../data/selectDataByEmail'
import {generateToken} from '../service/authenticator/authenticator'


export const login = async (req: Request, res: Response) => {
    let errorCode: number = 400
    try{
        const {email, password} = req.body

    if(!email || email.indexOf("@") === -1 ){
        throw new Error("Invalid email")
    }

    const user = await selectData(email)
    
    if(user.password !== password){
        throw new Error("Invalid password")
    }
    const token = generateToken(user.id)

    res.status(200).send({
        token
    })
}   
    catch(e){
    res.status(errorCode).send({
        message: e.message
    })
  }
}