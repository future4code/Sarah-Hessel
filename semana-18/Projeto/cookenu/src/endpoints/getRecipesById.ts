import {Request, Response} from 'express'
import { selectRecipe } from '../data/selectRecipe'

export const getRecipesById = async(req: Request, res: Response): Promise<void> => {
    let statusCode: number = 400
    try{
        const {id} = req.params
        const recipe = await selectRecipe(id)
        
        res.status(201).send({
            title: recipe.title,
            description: recipe.description
        })
    }
    catch(e){
        res.status(statusCode).send({
            message: e.sqlMessage || e.message
        })
    }
}
