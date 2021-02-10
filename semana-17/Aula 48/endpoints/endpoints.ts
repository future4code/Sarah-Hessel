import{ Request, Response } from "express";
import selectAllUsers from '../data/selectAllUsers'

export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
    let errorCode: number = 400
    try { 
        const {type} = req.params
        console.assert(type, "Parametro não chegou")
       const users = await selectAllUsers(type)
 
       if(!users.length){
          errorCode = 404
          throw new Error("No recipes found")
       }
 
       res.status(200).send(users)
       
    } catch (error) {
       res.status(errorCode).send({
        message: error.message
      })
    }
 }