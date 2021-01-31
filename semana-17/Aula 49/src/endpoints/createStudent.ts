import {Request, Response } from "express";
import insertStudent from "../data/insertStudent"

const createStudent = async(req: Request, res: Response) =>{
    let errorCode: number = 400
    try{
        const {name, email, birthdayBody, hobbie, mission_id} = req.body
        const [day, month, year] = birthdayBody.split("/")
        const birthday: Date = new Date(`${year}-${month}-${day}`)
        
        await insertStudent({
            name,
            email,
            birthday,
            hobbie,
            mission_id
        })

        if(!name || !email || !birthday || !hobbie){
            errorCode = 422 
            throw new Error("Campos não preenchidos")
        }
        res.status(200).send("Criado com sucesso!")
    }
    catch(e){
        res.status(errorCode).send({
            message: e.message
        })
    }
}

export default createStudent;