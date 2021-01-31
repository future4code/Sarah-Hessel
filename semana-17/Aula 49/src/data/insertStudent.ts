import { connection } from ".."
import {Student} from "../types/types"

const insertStudent = async(student : Student):Promise<any> => {
    try{
        await connection
        .insert({
            name: student.name,
            email: student.email,
            birthday: student.birthday,
            hobbie: student.hobbie,
            mission_id: student.mission_id
        })
        .into("student")
    }
    catch(e){
        console.log(e.sqlMessage || e.message)
    }
}

export default insertStudent;