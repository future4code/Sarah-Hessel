import {Request, Response } from "express";
import insertMission from "../data/insertMission"


const createMission = async ( req: Request, res: Response): Promise<void> => {
    let errorCode: number = 400
    try{
        const {name, start, end, modulo, type} = req.body

        if(!req.body){
            errorCode = 422 
            throw new Error("Campos inválidos")
        }

        const [day, month, year] = start.split("/") 
        const [dayEndDate, monthEndDate, yearEndDate] = end.split("/") 

        const start_date: Date = new Date(`${year}-${month}-${day}`)
        const end_date: Date = new Date(`${yearEndDate}-${monthEndDate}-${dayEndDate}`)
       
        await insertMission({
            name, 
            start_date,
            end_date,
            modulo, 
            type
        })
       
        res.status(200).send("Turma cadastrada com sucesso!")
    }
    catch(e){
        res.status(errorCode).send({
            message: e.message
        })
    }
}

export default createMission;