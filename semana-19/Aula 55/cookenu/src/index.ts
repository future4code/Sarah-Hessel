import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { userCreator } from './endpoints/userCreator';
import { userLogin } from './endpoints/userLogin';
import { dataCollector } from './endpoints/getUserByToken';
import { recipeCreator } from './endpoints/recipeCreator';
import { getRecipesById } from './endpoints/recipeGeneratorById';
import { getUserById } from './controller/getUserById';
import { userFollow } from './endpoints/userFollow';
import { userUnfollow } from './endpoints/userUnfollow';
import { getFeed } from './endpoints/recipeFeedGenerator';
import { removerRecipe } from './endpoints/removerRecipe';

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())


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

// Deletar receita
app.delete("/user/recipe", removerRecipe)


app.listen(3003, () => {
   console.log('Servidor rodando na porta 3003')
})

