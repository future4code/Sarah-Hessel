export type AuthenticationData = {
    id: string
}
export type User = {
    id: string,
    name: string,
    email: string,
    password: string
 }
 
 enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
 }
 
 type Post = {
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    createdAt: Date,
    authorId: string
 }

export interface SignupInputDTO {
    name: string,
    email: string,
    password: string
}

export interface LoginInputDTO{
    email: string,
    password: string
}

export function toUserModel(obj: any): User {
    return obj && {
        id: obj.id,
        email: obj.email,
        name: obj.name,
        password: obj.password
    }
}