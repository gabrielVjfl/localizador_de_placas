const PORT = 500

const express = require('express')

const app = express()

const route = require('./routes/route')

const cors = require('cors')

app.use(cors())

app.use(express.json())

app.use(express.urlencoded({extended: true}))

app.use('/api', route)

app.listen(PORT, () => {
    console.log('Rodando na porta', PORT)
})