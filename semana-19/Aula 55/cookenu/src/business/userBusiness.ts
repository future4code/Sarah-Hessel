import { getTokenData } from './services/authenticator'
import { selectUserById } from '../data/userDataBase'
import { generateToken } from '../business/services/authenticator'
import { compare } from '../business/services/hashManager'
import { user } from './entities/user'
import { login } from '../data/login'
import { deleteFollow } from '../data/deleteFollow'


export const businessUserById = async(id: string, token: string): Promise<object> => {
    let statusCode: number = 400

    getTokenData(token)

    if(!token || !getTokenData){
        statusCode = 406
        throw new Error('Invalid token')
    }

    const user = await selectUserById(id)

    const dataUser: user = {
        id: id,
        name: user.name,
        email: user.email,
        role: user.role
    }

    return dataUser
}


export const businessLogin = async(email: string, password: string): Promise<string> => {
    let statusCode: number = 400

    if(!email || !password){
        statusCode = 422
        throw new Error("Please make sure all fields are filled 'email' and 'password'")
    }
   
    const user = await login(email)

    if(!user){
       throw new Error("User not found!")
    }

    const passwordIsCorrect:boolean = compare(
        password, 
        user.password
    )

    if(!passwordIsCorrect){
        throw new Error("Incorrect Password")
    }

    const token = generateToken({
        id: user.id,
        role: user.role
     });
     
    return token
}


export const businessFollow = async(userToUnFollowId: string, token: string ): Promise<Array<object>> => {
    let statusCode: number = 400
    const tokenData = getTokenData(token)

    if(!token || !getTokenData){
        statusCode = 406
        throw new Error('Invalid token')
    }

    if(!userToUnFollowId){
        statusCode = 422
        throw new Error("Please make sure all fields are filled 'userToUnFollowId'")
    }
    await deleteFollow({
        follower_id: tokenData.id,
        followed_id: userToUnFollowId
    })
            
    const followerData: object = await selectUserById(tokenData.id)
    const followedData: object = await selectUserById(userToUnFollowId)

    if(!followerData || !followedData){
        throw new Error("User not found!")
    }
    return [followerData, followedData] as Array<object>
}

