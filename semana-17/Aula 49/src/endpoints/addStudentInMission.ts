import {Request, Response } from "express";
import updateStudent from "../data/updateStudent"

const addStudent = async (req: Request, res: Response) => {
    let errorCode: number = 400
    try{
        const {studentId, missionId} = req.params
    
        await updateStudent(studentId, missionId)
        
        res.status(200).json({
            message: "Inserido na turma com sucesso"
        })
    }
    catch(e){
        if(e.includes("não encontrado")) errorCode = 404
        if(e.includes("mission_id")) {
            errorCode = 404
            e = "Turma não encontrada"
         }
        res.status(errorCode).send({
            message: e.message
        })
    }
}

export default addStudent;
