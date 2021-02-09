import { LoginInputDTO, SignupInputDTO, User } from "../entities/User"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"
import { TokenManager } from "../services/TokenManager"
import { UserData } from "../data/UserData"

export class UserBusiness {
    async businessSignup(input: SignupInputDTO): Promise<string>{
        try{

        if (!input.name || !input.email || !input.password) {
            throw new Error('"name", "email" and "password" must be provided')
         }
         const idGenerator = new IdGenerator();
         const id: string = idGenerator.generateId();
   
         const hashManager = new HashManager();
         const cypherPassword = await hashManager.hash(input.password);

         const user: User = {
             id,
             name: input.name,
             email: input.email,
             password: cypherPassword
         } 

         const userDatabase = new UserData();
         await userDatabase.insertUser(user);


         const tokenManager = new TokenManager();
         const token: string = tokenManager.generateToken({ id });

         return token;

        }catch(error){
            throw new Error(error.message);
        }
    }
    businessLogin = async (input: LoginInputDTO): Promise<string> => {
        try{
            if (!input.email || !input.password) {
                throw new Error('"email" and "password" must be provided')
             }
  
            const idGenerator = new IdGenerator()
            const id: string = idGenerator.generateId()
             
            const hashManager = new HashManager()

            const userDatabase = new UserData();
            const user: User = await userDatabase.selectUserByEmail(input.email);

            if (!user) {
                throw new Error("Invalid credentials");
            }

            const cypherPassword = await hashManager.hash(input.password);
            const passwordIsCorrect: boolean = await hashManager.compare(input.password, user.password)

            if (!passwordIsCorrect) {
                throw new Error("Invalid credentials");
            }

            const tokenManager = new TokenManager()
            const token: string = tokenManager.generateToken({ 
                id 
            })
            
            return token
        }
        catch(e){
            throw new Error(e.message);
        }
    }
    

}