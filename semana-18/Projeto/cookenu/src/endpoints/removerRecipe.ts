import {Request, Response} from 'express'
import { deleteRecipe } from '../data/deleteRecipe'
import { getTokenData } from '../services/authenticator'

export const removerRecipe = async(req: Request, res: Response): Promise<void> => {
    let statusCode: number = 400
    try{
        const {id} = req.body
        const token: string = req.headers.authorization as string

        console.log({
            id: id,
            token: token
        })
        const tokenData = getTokenData(token)
        const oq = deleteRecipe(id, tokenData.id)
        console.log({
            tokenData: tokenData,
            functionDelete: oq
        })
        res.status(200).send({
            message: "Recipe successfully deleted!"
        })
    }
    catch(e){
        res.status(statusCode).send({
            message: e.sqlMessage || e.message
        })
    }
}
