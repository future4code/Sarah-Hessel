import { connection } from ".."
import {Specialities} from '../types/types'


const insertSpecialty = async(name: Specialities) => {
    try{
        await connection
        .insert({
           name
        })
        .into("specialty")
        console.log("Inserido!!")
    }
   catch(e){
    console.log(e.sqlMessage || e.message)
   }
}

export default insertSpecialty;