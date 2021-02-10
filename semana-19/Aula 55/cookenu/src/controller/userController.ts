import {Request, Response} from 'express'
import { businessFollow, businessLogin, businessUserById } from '../business/userBusiness'


export const getUserById = async(req: Request, res: Response): Promise<void> => {
    let statusCode: number = 400
    try{
        const {id} = req.params
        const token: string = req.headers.authorization as string    
        const data: object = businessUserById(id, token)

        res.status(200).send(data)
    }
    catch(e){
        res.status(statusCode).send({
            message: e.sqlMessage || e.message
        })
    }
}


export const userLogin = async(req: Request, res: Response) => {
    let statusCode: number = 400
    try{
        const {email, password} = req.body
        const token = await businessLogin(email, password)

        res.status(200).send({ 
            token 
        });
    }
    catch(e){
        res.status(statusCode).send({
            message: e.message
        })
    }
}


export const userUnfollow = async(req: Request, res: Response): Promise<void> => {
    let statusCode: number = 400
    try{
        const {userToUnFollowId} = req.body
        const token: string = req.headers.authorization as string

       const data: Array<object> = businessFollow(userToUnFollowId, token)

        res.status(200).send({
            message: `${data[0].followerData.name} successfully unfollowed ${followedData.name}!`
        })
    }
    catch(e){
        res.status(statusCode).send({
            message: e.sqlMessage || e.message
        })
    }
}