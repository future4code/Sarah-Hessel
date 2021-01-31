import {Request, Response} from 'express'
import {selectData} from '../data/selectDataById'
import {getTokenData} from '../service/authenticator/authenticator'

export const getDataByToken = async( req: Request, res: Response) => {
    let errorCode: number = 400
    try{
        const token = req.headers.authorization as string
        
        const authenticationData = getTokenData(token)
        const user = await selectData(authenticationData.id)
        
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