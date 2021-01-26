import { Request, Response } from "express";
import { createUser } from "../data/createUser";
import { generateToken } from "../service/authenticator/authenticator";
import { generate } from "../service/generateId/generateId";


export const signUp = async (req: Request, res: Response) => {
    let errorCode: number = 400
    try{
        
        const userData = {
            email: req.body.email as string,
            password: req.body.password as string
        }
        
        const id = generate()

    if(!userData.email || !userData.email.indexOf("@") ){
        throw new Error("Invalid email")
    }

    if(!userData.password || userData.password.length < 6){
        throw new Error("Invalid password");
    }
    await createUser(id, userData.email, userData.password)  
     
    const token = generateToken({
        id,
      });
     
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