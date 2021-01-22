import { connection } from ".."
import {Teacher} from "../types/types"

const inserTeacher = async(teacher: Teacher):Promise<any> => {
    try{
        const result = await connection 
        .insert({
            name: teacher.name,
            email: teacher.email,
            birthday: teacher.birthday,
            mission_id: teacher.mission_id
        })
        .into("teacher")   
    }
    catch(e){
        console.log(e.sqlMessage || e.message)
    }
}

export default inserTeacher;