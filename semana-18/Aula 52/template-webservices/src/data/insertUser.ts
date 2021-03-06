import { connection } from "../index";

export default async function insertUser(
    id: string,
    name: string,
    nickname: string,
    email: string,
    password: string,
    role: USER_ROLES,
) {
    await connection.insert({
        id,
        name,
        nickname,
        email,
        password,
        role
    }).into('TodoListUser')
}

export enum USER_ROLES {
    NORMAL = 'NORMAL',
    ADMIN = 'ADMIN'
}