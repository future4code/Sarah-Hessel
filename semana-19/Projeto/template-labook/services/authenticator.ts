import { v4 } from "uuid"


// const generateId = (): string => v4()

// export class AuthenticationData{
//    id: string
//    token: string

//    constructor(
//       userId: string,
//       userToken: string,
//       ) {
//       this.id = userId
//       this.token = userToken
//       }
//    }

// generateToken(
//       payload = AuthenticationData
//    ): string {
//       return jwt.sign(
//          payload,
//          process.env.JWT_KEY as string,
//          {
//             expiresIn: process.env.JWT_EXPIRES_IN
//          }
//       )
//    }

// getTokenData(
//       token: string
//    ): AuthenticationData {
//       const result: any = jwt.verify(
//          token,
//          process.env.JWT_KEY as string
//       )
   
//       return { id: result.id, }
//    } 
// }




