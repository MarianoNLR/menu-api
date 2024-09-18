import express from 'express'
import 'dotenv/config'
import bodyParser from 'body-parser'
import cors from 'cors'
import authRouter from './routes/authRouter.js'
import foodRouter from './routes/foodRouter.js'
import userRouter from './routes/userRouter.js'
import restaurantRouter from './routes/restaurantRouter.js'

const app = express()

const PORT = process.env.PORT
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors({
    origin: '*',
    credentials: true
}))

//Routers
app.use('/auth', authRouter)
app.use('/users', userRouter)
app.use('/restaurants', restaurantRouter)
app.use('/foods', foodRouter)

app.get('/', (req, res) => {
    res.send(`<h1>Hola Mundo</h1>`)
})

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})