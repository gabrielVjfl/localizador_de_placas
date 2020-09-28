const express = require('express')

const route = express()

const sinesp = require('sinesp-api')

route.post('/consulta', (req,res) => {

const {placa} = req.body

    sinesp.search(placa).then(response => {
        console.log(response)

        res.status(200).send(response)

    }).catch(errBackend => {
       res.status(400).send({errBackend: 'Não possui nenhum carro com está placa'})
    })
})
module.exports = route