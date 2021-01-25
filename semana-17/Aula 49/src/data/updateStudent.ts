import { connection } from ".."

const updateStudent = async (studentId: string, missionId: string): Promise<void> => {
    try{
       
        const result = await connection.raw(`
         SELECT * FROM student
         WHERE id = "${studentId}";
      `)

      if(!result[0][0]) throw new Error("Estudante não encontrado")

        await connection.raw(`
        UPDATE student 
        SET mission_id = ${missionId}
        WHERE id = ${studentId}
        `)
    }
    catch(e){
        console.log(e.sqlMessage || e.message)
    }
}

export default updateStudent;
