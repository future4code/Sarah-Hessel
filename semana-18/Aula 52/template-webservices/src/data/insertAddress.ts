import { connection } from '..';
import {address} from "../types/address"
import {generateId} from '../services/idGenerator'

const URL = 'https://viacep.com.br/ws'

export async function insertAddress(address: address){
    try{
        const id: string = generateId()
        
        await connection
        .insert({
            id: id,
            street: address.street,
            number: address.number,
            complemento: address.complemento,
            neighborhood: address.neighborhood,
            city: address.city,
            state: address.state
        })
        .into("address")
    }
    catch(e){
       throw new Error(e.message)
    }
}