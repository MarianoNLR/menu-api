import express from 'express'

const app = express()

const PORT = process.env.PORT ?? 3000

app.get('/', (req, res) => {
    res.send(`<h1>Hola Mundo</h1>`)
})

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})