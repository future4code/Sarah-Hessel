import {Request, Response} from 'express'
import { selectAllRecipes } from '../data/selectAllRecipes'
import { getTokenData } from '../services/authenticator'
import { recipe } from '../types/recipe'

export const getFeed = async(req: Request, res: Response): Promise<void> => {
    let statusCode: number = 400
    try{
        const token: string = req.headers.authorization as string
        
        getTokenData(token)

        if(!token || !getTokenData){
            statusCode = 406
            throw new Error('Invalid token')
        }
        
        const dataQuery = await selectAllRecipes()

        const recipes = dataQuery.map((item: recipe) => {
            return {id: item.id, title: item.title, description: item.description}
        })
        
        res.status(201).send({
            recipes: recipes
        })
    }
    catch(e){
        res.status(statusCode).send({
            message: e.sqlMessage || e.message
        })
    }
}
