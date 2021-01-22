import { connection } from ".."

const createTable = async():Promise<void> => {
    try{
        await connection.raw(`
        CREATE TABLE mission(
            id INT PRIMARY KEY AUTO_INCREMENT, 
            name VARCHAR(67) NOT NULL, 
            start_date DATE NOT NULL, 
            end_date DATE NOT NULL, 
            modulo ENUM ("1", "2", "3", "4", "5", "6", "7", "UNDEFINED") DEFAULT "UNDEFINED",
            type ENUM ("integral", "noturno")
           );           
        `)

        await connection.raw(`
        CREATE TABLE student(
            id INT PRIMARY KEY AUTO_INCREMENT,
            name VARCHAR(67) NOT NULL,
            email VARCHAR(67) NOT NULL UNIQUE,
            birthday DATE NOT NULL,
            hobbie VARCHAR(67) NOT NULL,
            mission_id INT,
            FOREIGN KEY (mission_id) REFERENCES mission(id)
            );
        `)

        await connection.raw(`
        CREATE TABLE teacher(
            id INT PRIMARY KEY AUTO_INCREMENT,
            name VARCHAR(67) NOT NULL,
            email VARCHAR(67) UNIQUE,
            birthday DATE NOT NULL, 
            mission_id INT,
            FOREIGN KEY (mission_id) REFERENCES mission(id)
           );
        `)
        await connection.raw(`
        CREATE TABLE specialty(
            id INT PRIMARY KEY AUTO_INCREMENT,
            name VARCHAR(67) NOT NULL 
        );
        `)
        await connection.raw(`
        CREATE TABLE teacher_specialty(
            teacher_id INT NOT NULL,
            specialty_id INT NOT NULL,
            FOREIGN KEY (teacher_id) REFERENCES teacher(id),
            FOREIGN KEY (specialty_id) REFERENCES specialty(id)
        );
        `)
       console.log("Tabelas criadas com sucesso!")
    }
    catch(e){
        console.log(e.sqlMessage || e.message)
    }
}
createTable();

