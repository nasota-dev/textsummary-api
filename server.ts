import dotenv from "dotenv"
import express from "express"
import morgan from "morgan"
import cors from "cors"
import router from "./src/routes/routes"

const app = express()
dotenv.config()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

const PORT = process.env.PORT || 3000

app.use(router)

app.listen(PORT,() => {
  console.log(`Servidor rodando na porta ${PORT}!`)
})


