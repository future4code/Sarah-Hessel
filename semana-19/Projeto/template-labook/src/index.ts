/**************************** IMPORTS ******************************/
import express, { Express, Request, Response } from "express"
import cors from "cors"

/**************************** CONFIG ******************************/

const app: Express = express()
app.use(express.json())
app.use(cors())


/**************************** ENDPOINTS ******************************/

app.post('/users/signup', async (req: Request, res: Response) => {
})

app.post('/users/login', async (req: Request, res: Response) => {
})

app.post('/posts/create', async (req: Request, res: Response) => {
   try {
      let message = "Success!"

      const { photo, description, type } = req.body

      const token: string = req.headers.authorization as string

      const tokenData: AuthenticationData = getTokenData(token)

      const id: string = generateId()

      await connection("labook_posts")
         .insert({
            id,
            photo,
            description,
            type,
            author_id: tokenData.id
         })

      res.status(201).send({ message })

   } catch (error) {
      let message = error.sqlMessage || error.message
      res.statusCode = 400

      res.send({ message })
   }
})

app.get('/posts/:id', async (req: Request, res: Response) => {
   try {
      let message = "Success!"

      const { id } = req.params

      const queryResult: any = await connection("labook_posts")
         .select("*")
         .where({ id })

      if (!queryResult[0]) {
         res.statusCode = 404
         message = "Post not found"
         throw new Error(message)
      }

      const post: Post = {
         id: queryResult[0].id,
         photo: queryResult[0].photo,
         description: queryResult[0].description,
         type: queryResult[0].type,
         createdAt: queryResult[0].created_at,
         authorId: queryResult[0].author_id,
      }

      res.status(200).send({ message, post })

   } catch (error) {
      let message = error.sqlMessage || error.message
      res.statusCode = 400

      res.send({ message })
   }
})

/**************************** SERVER INIT ******************************/

app.listen(3003, () => {
   console.log("Server running on port 3003")
})