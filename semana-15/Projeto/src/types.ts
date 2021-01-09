export type Transaction = {
    value: number, 
    date: Date,
    description: string
}

 export type User = {
    name: string,
    CPF: string,
    birthday?: Date,
    balance?: number,
    statement?: Transaction[]
}

