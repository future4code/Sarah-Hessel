import axios from 'axios';
import {address} from "../types/address"

const URL = 'https://viacep.com.br/ws'

export async function addressManager(cep: string): Promise<address>{
    try{
        const result = await axios.get(`${URL}/${cep}/json`)

        const myAddress: address = {
            street: result.data.logradouro,
            neighborhood: result.data.bairro,
            city: result.data.localidade,
            state: result.data.uf,
        }
        return myAddress
    }
    catch(e){
       throw new Error(e.message)
    }
}