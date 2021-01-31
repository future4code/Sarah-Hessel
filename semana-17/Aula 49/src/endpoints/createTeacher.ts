import {Request, Response } from "express";
import insertTeacher from "../data/insertTeacher"
import insertSpecialty from "../data/insertSpecialty"

const createTeacher = async(req: Request, res: Response) =>{
    let errorCode: number = 400
    try{
        const {name, email, birthdayBody, mission_id } = req.body
        const {specialty} = req.body

        const [day, month, year] = birthdayBody.split("/")
        const birthday: Date = new Date(`${year}-${month}-${day}`)
        
        await insertTeacher({
            name,
            email,
            birthday,
            mission_id
        })
        await insertSpecialty(
            specialty
        )
        if(!name || !email || !birthday){
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

export default createTeacher;