import express from 'express'
import 'dotenv/config'
import bodyParser from 'body-parser'
import cors from 'cors'
const app = express()

const PORT = process.env.PORT
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors({
    origin: '*',
    credentials: true
}))


app.get('/', (req, res) => {
    res.send(`<h1>Hola Mundo</h1>`)
})

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})