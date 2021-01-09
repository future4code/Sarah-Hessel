export type Transaction = {
    value: number, 
    date: Date,
    description: string
}

 export type User = {
    CPF: string,
    name: string,
    birthday: Date,
    balance?: number,
    statement?: Transaction[]
}

