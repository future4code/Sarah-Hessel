import { connection } from "..";
import { Mission } from "../types/types";

const insertMission = async(mission: Mission) => {
    try{
        await connection
        .insert({
            name: mission.name,
            start_date: mission.start_date,
            end_date: mission.end_date,
            modulo: mission.modulo,
            type: mission.type
        })
        .into("mission")
        console.log("Turma criada!")
    }
    catch(e){
        console.log(e.sqlMessage || e.message)
    }
}

export default insertMission;