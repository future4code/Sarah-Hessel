import * as jwt from "jsonwebtoken"

export function generateToken(id: string): string{
    const token: string = jwt.sign({id},
        process.env.JWT_KEY as string,    // como o tipo pode ser undefined tb é importante colocar o AS string ou ! contrario do ? 
                                         //onde o ? é talvez não venha o ! é com certeza vem 
        {expiresIn: process.env.JWT_EXPIRED_TIME as string || "1d"}) //  caso o valor esteja nulo
    return token;
}

export function getTokenDate(token: string): AuthenticationData{
    const payload = jwt.verify(token, process.env.JWT_KEY as string);
    return payload as AuthenticationData
}

export type AuthenticationData = {
    id: string
}