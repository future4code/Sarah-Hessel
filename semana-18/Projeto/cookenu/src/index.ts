import express from 'express'
import knex from 'knex'
import cors from 'cors'
import dotenv from 'dotenv'
import { userCreator } from './endpoints/userCreator'
import { userLogin } from './endpoints/userLogin'
import { dataCollector } from './endpoints/getUserByToken'
import { recipeCreator } from './endpoints/recipeCreator'
import { getRecipesById } from './endpoints/recipeGeneratorById'
import { getUserById } from './endpoints/getUserById'
import { userFollow } from './endpoints/userFollow'
import { userUnfollow } from './endpoints/userUnfollow'
import { getFeed } from './endpoints/RecipeFeedGenerator'

dotenv.config()

export const connection = knex({
   client: 'mysql',
   connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: 3306
   }
})


const app = express()
app.use(express.json())
app.use(cors())

app.get("/", async function(req,res){
   res.send(await connection.raw('show tables'))
})

// Criar usuário 
app.post("/signup", userCreator)

// Fazer login
app.post("/login", userLogin)

// Visualizar o próprio perfil
app.get("/user/profile", dataCollector)

// Visualizar o perfil dos outros
app.get("/user/profile/:id", getUserById)

// Criar receita
app.post("/recipe", recipeCreator)

// Visualizar receita 
app.get("/recipe/:id", getRecipesById)

// Seguir usuário
app.post("/user/follow", userFollow)

// Deixar de seguir usuário
app.post("/user/unfollow", userUnfollow)

// Mostra o feed de receitas
app.get("/user/feed", getFeed)


app.listen(3003, () => {
   console.log('Servidor rodando na porta 3003')
})

