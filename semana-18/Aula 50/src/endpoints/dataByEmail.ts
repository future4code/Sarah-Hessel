import { Request, Response } from "express";
import {selectData} from '../data/selectDataByEmail'


export const dataByEmail = async (req: Request, res: Response) => {
    let errorCode: number = 400
    try{
        const {email} = req.params

    if(!email || !email.indexOf("@") ){
        throw new Error("Invalid email")
    }

    await selectData(email)
 
    res.status(200).send({
        selectData
    })

}   
    catch(e){
    res.status(errorCode).send({
        message: e.message
    })
  }
}