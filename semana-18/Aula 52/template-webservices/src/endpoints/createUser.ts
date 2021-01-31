import { Request, Response } from "express";
import { insertAddress } from "../data/insertAddress";
import insertUser from "../data/insertUser";
import { addressManager } from "../services/addressManager";
import { generateToken } from "../services/authenticator";
import { hash } from "../services/hashManager";
import {generateId} from "../services/idGenerator";
import { address } from "../types/address";

export default async function createUser(
    req: Request,
    res: Response
) {
    try {

        if (
            !req.body.name ||
            !req.body.nickname ||
            !req.body.email ||
            !req.body.password ||
            !req.body.role ||
            !req.body.cep ||
            !req.body.number ||
            !req.body.complemento
        ) {
          throw new Error('Preencha os campos "name","nickname", "email" e "password"')
        }

        const id: string = generateId()
        
        const cypherPassword = await hash(req.body.password);

        await insertUser(
            id,
            req.body.name,
            req.body.nickname,
            req.body.email,
            cypherPassword,
            req.body.role
        )
         const token: string = generateToken({
            id,
            role: req.body.role
         })

         const infos: address = await addressManager(req.body.cep)

         const {street, neighborhood, city, state} = infos

         const {number, complemento} = req.body
        await insertAddress({
             street,
             number,
             complemento,
             neighborhood,
             city,
             state
         })

        res
            .status(201)
            .send({
               message:"Usuário criado!",
               token
            })

    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}

