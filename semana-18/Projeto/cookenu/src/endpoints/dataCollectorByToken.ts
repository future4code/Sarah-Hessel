import {Request, Response} from 'express'
import {getTokenData} from '../services/authenticator'
import { SelectData } from '../data/selectDataById'


export const dataCollector = async(req: Request, res: Response): Promise<void> => {
    let errorCode: number = 400
    try{
        const token = req.headers.Authorization as string

        const authenticationData = getTokenData(token)
        const user = await SelectData(authenticationData.id)
        
        res.status(200).send({
            id: user.id,
            email: user.email
        })
    }
    catch(e){
        res.status(errorCode).send({
            message: e.message
        })
    }
}