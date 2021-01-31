export type Student = {
    name: string,
    email: string,
    birthday: Date,
    hobbie: string,
    mission_id?: number
}
export type Teacher = {
    name: string,
    email: string,
    birthday: Date,
    mission_id?: number
}
export type Mission = {
    name: string,
    start_date: Date, 
    end_date: Date, 
    modulo: string,
    type: TYPE
}
export enum TYPE{
  INTEGRAL = "integral",
  NOCTURNO = "nocturno"
}
export enum Specialities{
    REACT = "React",
    REDUX = "REDUX",
    CSS = "CSS", 
    TESTES = "Testes", 
    TYPESCRIPT = "Typescript", 
    POO = "POO", 
    BACKEND = "Backend"
}