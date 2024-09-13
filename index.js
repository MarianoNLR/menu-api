import express from 'express'
import 'dotenv/config'
const app = express()

const PORT = process.env.PORT

app.get('/', (req, res) => {
    res.send(`<h1>Hola Mundo</h1>`)
})

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})