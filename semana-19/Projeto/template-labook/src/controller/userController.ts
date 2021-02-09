import { Request, Response } from "express"
import { UserBusiness } from "../business/userBusiness"
import { LoginInputDTO, SignupInputDTO } from "../entities/User"

export class UserController{

    controllerLogin = async(req: Request, res: Response) =>{
        try{
            let message = "Success!"

            const input: LoginInputDTO = {
                email: req.body.email,
                password: req.body.password
            }

            const userBussines = new UserBusiness()
            const token = await userBussines.businessLogin(input)

            res.status(200).send({message, token })

        }
        catch(e){
            res.send(400).send({
                message: e.message
            })
        }
    }
    controllerSignup = async(req: Request, res: Response) => {
        try{
            const input: SignupInputDTO = {
                name: req.body.name,
                email: req.body.name,
                password: req.body.name
            }
            const token = await new UserBusiness().businessSignup(input)
        }
        catch(e){
            res.send(400).send({
                message: e.message
            })
        }
    }
}