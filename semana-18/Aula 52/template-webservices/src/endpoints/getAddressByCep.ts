import { Request, Response } from 'express'
import {addressManager} from '../services/addressManager'
import {address} from "../types/address"



export const getAddress = async (req: Request, res: Response) => {
    let errorCode: number = 400
    try{
        if(isNaN(Number(req.params.cep)) || req.params.cep.includes("-")){
            throw new Error("Numeric values only")
        }
        const cep = req.params.cep
        
        const infos: address = await addressManager(cep)

        res.status(200).send(infos)
    }
    catch(e){
        res.status(errorCode).send({
            message: e.message
        })
    }
}